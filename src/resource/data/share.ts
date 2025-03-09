export default [{
  name: 'Twitter',
  getUrl: (url: string) => `https://twitter.com/intent/tweet?url=${url}`,
}, {
  name: 'Facebook',
  getUrl: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
}, {
  name: 'WhatsApp',
  getUrl: (url: string) => `https://wa.me/?text=${url}`,
}, {
  name: 'Reddit',
  getUrl: (url: string) => `http://www.reddit.com/submit?url=${url}`,
}, {
  name: 'Pinterest',
  getUrl: (url: string) => `http://pinterest.com/pin/create/button/?url=${url}`,
}, {
  name: 'Telegram',
  getUrl: (url: string) => `https://t.me/share/url?url=${url}`,
}, {
  name: 'Email',
  getUrl: (url: string) => `mailto:?subject=Please join me on Gettr&body=${url}`,
}, {
  name: 'Snapchat',
  getUrl: (url: string) => `https://snapchat.com/scan?attachmentUrl=${url}&utm_source=gettr`,
}, {
  name: 'Line',
  getUrl: (url: string) => `https://lineit.line.me/share/ui?url=${url}`,
}];