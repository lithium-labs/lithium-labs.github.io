const products = {
  nil: {
    name: 'Nil CLI',
    description: 'A blazingly fast cli tool to clean up your caches!',
    markdown: `Nil is a blazingly fast and small cache cleaner made in Rust with performance and cross compatibility in mind.`,
    buttons: [
      { label: 'Releases', link: 'https://github.com/lithium-labs/nil/releases/latest', target: '_blank' },
      { label: 'Repository', link: 'https://github.com/lithium-labs/nil', target: '_blank' }
    ],
    color: "#9271cc",
    status: "Get",
    statusColor: "#656cf3",
    buttonColor: "#ffffff"
  },
  doomsday: {
    name: 'Kıyamet Saati',
    description: "Halk gözünden Türkiye'nin durumunun görselleştirilmesi...",
    markdown: `# Giriş

Bu site, Türkiye'nin yakın zamanlardaki siyasi, sosyal, ekonomik, sivil özgürlükleri ve politik alanlarındaki durumunu kapsamlı ve halkın gözünden analiz ederek, ülkenin iç ve dış faktörler nedeniyle çöküşe ne kadar yakın olduğunu gösteren bir Kıyamet Saati oluşturmaktadır.<br><br>
# Kıyamet Saati Kavramı

"Kıyamet Saati" (Doomsday Clock) kavramı, The Bulletin tarafından nükleer savaş tehdidi ve iklim değişikliği gibi küresel felaketlere ne kadar yakın olduğumuzu sembolize etmek için kullanılır. Bu kavram, bu sitede ise Türkiye'nin iç istikrar ve bütünlüğünün tehlikeye girmesi riskini değerlendirmek amacıyla kullanılır. Bu saatte 09:05:00 ülkenin dışarıdan (başka ülkeler veya topluluklarca) veya içeriden (halk tarafından) tamamen çöküşünün durdurulamayacağı sürecin başlangıcını temsil eder. Saatin her hareketi, ülkenin bu noktaya yaklaşmasını veya uzaklaşmasını gösteren önemli olaylar ile ilişkendirilmiştir. `,
    buttons: [
      { label: 'Siteye Git', link: 'https://kiyamet-saati.vercel.app', target: '_blank' }
    ],
    color: "#cc7171",
    status: "Git",
    statusColor: "#f3a565",
    buttonColor: "#000000"
  }
};

export default products;