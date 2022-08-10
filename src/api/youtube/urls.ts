export function getYoutubeThumbnailUrl(videoUrl: string) {
  const videoId = videoUrl.split('v=')[1];
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
}
