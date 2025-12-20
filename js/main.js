
// Social Sharing Logic
document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);
  const text = encodeURIComponent("Check out this portfolio: ");

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${text}${currentUrl}`,
    x: `https://twitter.com/intent/tweet?text=${text}&url=${currentUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
    reddit: `https://reddit.com/submit?url=${currentUrl}&title=${pageTitle}`
  };

  const setShareLink = (id, url) => {
    const element = document.getElementById(id);
    if (element) {
      element.href = url;
    }
  };

  setShareLink('share-whatsapp', shareLinks.whatsapp);
  setShareLink('share-x', shareLinks.x);
  setShareLink('share-linkedin', shareLinks.linkedin);
  setShareLink('share-reddit', shareLinks.reddit);
});
