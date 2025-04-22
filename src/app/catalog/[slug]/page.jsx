import { notFound } from 'next/navigation';
import CatalogItem from '../../../../components/Catalog/CatalogItem';

// Прямой импорт JSON (работает в Next.js 13+)
import catalogItems from '../../../../public/Catalog/Articles.json';

async function getProjectData(slug) {
  // Для SSR/SSG используем прямой поиск по импортированным данным
  return catalogItems.find(item => item.slug === slug);
}

export default async function CatalogItemPage({ params }) {
  const catalogItem = await getProjectData(params.slug);
  
  if (!catalogItem) {
    return notFound();
  }

  return <CatalogItem catalogItem={catalogItem} />;
}

export async function generateStaticParams() {
  // Используем импортированные данные
  return catalogItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const catalogItem = await getProjectData(params.slug);
  
  return {
    title: catalogItem?.title || 'Проект дома',
    description: catalogItem?.description || 'Описание проекта',
    keywords: catalogItem?.keywords || 'строительство, дома, проекты',
    openGraph: {
      images: [
        {
          url: `/Catalog/${catalogItem?.img1}.jpg`,
          width: 800,
          height: 600,
          alt: catalogItem?.title || 'Проект дома',
        },
      ],
    },
  };
}