const CONFIG = {
nama: "FafnirGank", // Nama Store
profil: "https://files.catbox.moe/ekx16j.jpeg", // Url Profil
banner: "https://files.catbox.moe/fkvciw.jpeg", // Url Banner 
tentang: "FafnirGank Marketplace adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2020. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Suruh, Kab.Semarang, Indonesia",
sosial_media: {
  email: "luxardd@gmail.com", // Email
  youtube: "-", // YouTube Username 
  tiktok: "fafir886", // Tiktok Username 
  whatsapp: "6285921967820", // WhatsApp Number 
  telegram: "-" // Telegram Username
},
payment: {
  dana: "083895079009", // Payment Dana
  gopay: "083895079009", // Payment Gopay 
  ovo: "083895079009", // Payment Ovo 
  qris: "https://files.catbox.moe/6sy3lm.jpeg" // Url Qris
},
telegram_api: {
  bot: "62828278:7678blablabla", // Token bot father
  chatid: "6118311111" // ID telegram
},
}

// Produk
const productsData = {
  //           "Akun Game": [
  // {
  //   "id": 1,
  //   "name": "Akun Mobile Legends",
  //   "icon": "fas fa-user",
  //   "description": "Akun Mobile Legends siap pakai dengan berbagai pilihan rank.",
  //   "variants": [
  //     { "name": "Akun Warrior", "price": 15000 },
  //     { "name": "Akun Elite", "price": 25000 },
  //     { "name": "Akun Master", "price": 40000 },
  //     { "name": "Akun Grandmaster", "price": 60000 },
  //     { "name": "Akun Epic", "price": 85000 },
  //     { "name": "Akun Legend", "price": 120000 },
  //     { "name": "Akun Mythic", "price": 180000 },
  //     { "name": "Akun Mythic Glory", "price": 250000 },
  //     { "name": "Akun Sultan", "price": 350000 },
  //     { "name": "Akun Full Skin", "price": 500000 },
  //     { "name": "Akun Premium", "price": 750000 }
  //   ]
  // },
  // {
  //               "id": 2,
  //               "name": "VPS Kecil",
  //               "icon": "fas fa-microchip",
  //               "description": "Virtual Private Server murah untuk belajar dan project kecil.",
  //               "variants": [
  //                 { "name": "1 vCPU / 1GB RAM / 20GB SSD", "price": 25000 },
  //                 { "name": "2 vCPU / 2GB RAM / 40GB SSD", "price": 45000 }
  //               ]
  //             },
  //             {
  //               "id": 3,
  //               "name": "VPS Menengah",
  //               "icon": "fas fa-hdd",
  //               "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
  //               "variants": [
  //                 { "name": "2 vCPU / 4GB RAM / 80GB SSD", "price": 75000 },
  //                 { "name": "4 vCPU / 8GB RAM / 160GB SSD", "price": 135000 }
  //               ]
  //             },
  //             {
  //               "id": 4,
  //               "name": "Dedicated Server",
  //               "icon": "fas fa-database",
  //               "description": "Server dedicated dengan performa tinggi, cocok untuk skala besar.",
  //               "variants": [
  //                 { "name": "8 vCPU / 32GB RAM / 500GB SSD", "price": 450000 },
  //                 { "name": "16 vCPU / 64GB RAM / 1TB SSD", "price": 800000 }
  //               ]
  //             },
  //             {
  //               "id": 5,
  //               "name": "Web Hosting",
  //               "icon": "fas fa-globe",
  //               "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
  //               "variants": [
  //                 { "name": "Starter (1GB Storage)", "price": 15000 },
  //                 { "name": "Basic (5GB Storage)", "price": 30000 },
  //                 { "name": "Pro (10GB Storage)", "price": 50000 }
  //               ]
  //             }
  //           ],
  //           "Desain": [
  //               {
  //                   id: 6,
  //                   name: "Desain Logo",
  //                   icon: "fas fa-pen-nib",
  //                   description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
  //                   variants: [
  //                       { name: "Logo Minimalis", price: 2000 },
  //                       { name: "Logo Typography", price: 2500 },
  //                       { name: "Logo Mascot", price: 3000 },
  //                       { name: "Logo Vintage", price: 4000 },
  //                       { name: "Logo Modern", price: 5000 },
  //                       { name: "Request Custom", price: "Harga sesuai request" }
  //                   ]
  //               },
  //               {
  //                   id: 7,
  //                   name: "Desain Banner",
  //                   icon: "fas fa-image",
  //                   description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
  //                   variants: [
  //                       { name: "Banner Sosmed", price: 15000 },
  //                       { name: "Banner Event", price: 25000 },
  //                       { name: "Banner Promosi", price: 30000 }
  //                   ]
  //               },
  //               {
  //                   id: 8,
  //                   name: "Desain Poster",
  //                   icon: "fas fa-scroll",
  //                   description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
  //                   variants: [
  //                       { name: "Poster A4", price: 20000 },
  //                       { name: "Poster A3", price: 35000 }
  //                   ]
  //               },
  //               {
  //                   id: 9,
  //                   name: "UI/UX Design",
  //                   icon: "fas fa-laptop-code",
  //                   description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern dan user-friendly.",
  //                   variants: [
  //                       { name: "Landing Page", price: 75000 },
  //                       { name: "Full Website", price: 250000 },
  //                       { name: "Mobile App UI", price: 300000 }
  //                   ]
  //               },
  //               {
  //                   id: 10,
  //                   name: "Desain Kartu Nama",
  //                   icon: "fas fa-id-card",
  //                   description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
  //                   variants: [
  //                       { name: "Basic", price: 10000 },
  //                       { name: "Premium", price: 20000 }
  //                   ]
  //               }
  //           ],
            "Produk Digital": [
    {
        id: 11,
        name: "Video Editing",
        icon: "fas fa-video",
        description: "Layanan editing video profesional untuk berbagai kebutuhan seperti konten sosial media, YouTube, dan promosi.",
        variants: [
            { name: "Edit Video Basic", price: 15000 },
            { name: "Edit Video Medium", price: 30000 },
            { name: "Edit Video Advanced", price: 50000 }
        ]
    },
    {
        id: 12,
        name: "Paid Edit",
        icon: "fas fa-star",
        description: "Jasa editing premium dengan kualitas tinggi, efek sinematik, dan request custom sesuai keinginan.",
        variants: [
            { name: "Paid Edit Simple", price: 25000 },
            { name: "Paid Edit Pro", price: 50000 },
            { name: "Paid Edit Cinematic", price: 75000 }
        ]
    },
    {
        id: 13,
        name: "Poster Design",
        icon: "fas fa-image",
        description: "Jasa desain poster menarik untuk promosi, event, atau kebutuhan bisnis lainnya.",
        variants: [
            { name: "Poster Basic", price: 10000 },
            { name: "Poster Premium", price: 20000 },
            { name: "Poster Custom", price: 30000 }
        ]
    },
    {
        id: 14,
        name: "Thumbnail",
        icon: "fas fa-photo-video",
        description: "Pembuatan thumbnail menarik dan clickbait untuk YouTube atau platform lainnya.",
        variants: [
            { name: "Thumbnail Basic", price: 8000 },
            { name: "Thumbnail HD", price: 15000 },
            { name: "Thumbnail Premium", price: 25000 }
        ]
    },
    {
        id: 15,
        name: "Akun Premium",
        icon: "fas fa-user-circle",
        description: "Berbagai akun premium dengan harga terjangkau untuk hiburan dan produktivitas.",
        variants: [
            { name: "Netflix Premium (1 Bulan)", price: 35000 },
            { name: "Spotify Premium (1 Bulan)", price: 25000 },
            { name: "Canva Pro (1 Bulan)", price: 20000 },           
            { name: "Alight Motion (1 Tahun) Priv", price: 10000 },
            { name: "Alight Motion (1 Tahun) Shar", price: 5000 }     
        ]
    }
            ]
        };