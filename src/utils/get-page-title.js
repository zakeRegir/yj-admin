// import defaultSettings from '@/settings'

// const title = defaultSettings.title || 'Vue Element Admin'
const title = 'yj-admin'
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
