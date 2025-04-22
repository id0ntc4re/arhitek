"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./VideoGallery.module.scss";

const VideoGallery = ({ videos, title }) => {
  const [selectedVideo, setSelectedVideo] = useState(videos.length > 0 ? videos[0] : null);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (videos.length > 0 && !selectedVideo) {
      setSelectedVideo(videos[0]);
    }
  }, [videos, selectedVideo]);

  const handlePlayButtonClick = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          type: "player:play",
          data: {},
        }),
        "*"
      );
      setIsPlaying(true);
    }
  };

  if (!selectedVideo) {
    return <p>Нет доступных видео.</p>;
  }
  
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{title}</h1>
      <h5 className={styles.headingDescription}>Посмотрите наши видео на RuTube</h5>
      <div className={styles.gallery}>
        <div className={styles.mainVideoContainer}>
          <div className={styles.videoWrapper}>
            <iframe
              ref={iframeRef}
              id="rutube-video"
              src={`https://rutube.ru/play/embed/${selectedVideo.link}?autoplay=0`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={`${styles.mainVideo} ${isPlaying ? styles.playing : ""}`}
              title={selectedVideo.title}
            />
            {!isPlaying && (
              <button
                onClick={handlePlayButtonClick}
                className={styles.customPlayButton}
                aria-label="Начать воспроизведение видео"
              />
            )}
          </div>
          <h3 className={styles.videoTitle}>{selectedVideo.title}</h3>
          <p className={styles.videoDescription}>
          {selectedVideo.description}
          </p>
        </div>

        <div className={styles.playlist}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${styles.playlistItem} ${selectedVideo === video ? styles.active : ""}`}
              onClick={() => {
                setSelectedVideo(video);
                setIsPlaying(false);
              }}
            >
              <img
                src={video.thumbnail_url}
                alt={video.title}
                className={styles.thumbnail}
              />
              <div className={styles.textContent}>
                <h4 className={styles.smallVideoTitle}>{video.title}</h4>
                <p className={styles.smallVideoDuration}>
                {video.description ? video.description : 'Описание отсутствует'}
                </p>
              </div>
            </div>
          ))}
          <a
            href="https://rutube.ru/channel/27042220/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.channelButton}
            aria-label="Перейти на канал Rutube"
          >
            Перейти на канал
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
