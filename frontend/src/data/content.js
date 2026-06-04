// Bilingual content for the Gastronomi Nasi Jamblang landing page.
// Images sourced from design guidelines.
export const IMAGES = {
  hero: "https://images.pexels.com/photos/37135571/pexels-photo-37135571.jpeg",
  squid: "https://images.pexels.com/photos/19835566/pexels-photo-19835566.jpeg",
  riceLeaf: "https://images.unsplash.com/photo-1658218615127-40b7068bbae5",
  teakLeaf: "https://images.pexels.com/photos/34380890/pexels-photo-34380890.jpeg",
  woodStove: "https://images.unsplash.com/photo-1761772593493-23a630a333b3",
  bambooBasket: "https://images.unsplash.com/photo-1646170629004-b3c84a27fc17",
  display: "https://images.pexels.com/photos/6872186/pexels-photo-6872186.jpeg",
};

export const CONTENT = {
  id: {
    langName: "ID",
    nav: {
      philosophy: "Filosofi",
      ingredients: "Bahan",
      techniques: "Teknik",
      tasting: "Cita Rasa",
      serving: "Penyajian",
      experience: "Pengalaman",
      nutrition: "Nutrisi",
      ethics: "Etika",
    },
    hero: {
      overline: "Warisan Kuliner Pesisir Cirebon",
      title: "Gastronomi Nasi Jamblang",
      subtitle:
        "Merayakan harmoni antara rasa, sejarah, dan kebersamaan. Nikmati kelembutan nasi yang dibalut secara tradisional dengan daun jati.",
      ctaPrimary: "Telusuri Cerita",
      ctaSecondary: "Lihat Bahan Utama",
    },
    philosophy: {
      overline: "Sejarah · Filosofi · Tradisi · Sosial",
      title: "Filosofi di Balik Sebungkus Nasi",
      lead:
        "Nasi Jamblang bukan sekadar hidangan, melainkan representasi sejarah, tradisi, dan kreativitas masyarakat pesisir Cirebon.",
      cards: [
        {
          tag: "Daun Jati",
          title: "Kesederhanaan & Kearifan",
          body:
            "Dibungkus dengan daun jati yang melambangkan kesederhanaan, kedekatan dengan alam, dan kearifan masyarakat Cirebon dalam memanfaatkan sumber daya lokal. Aromanya yang meresap mencerminkan bahwa tradisi sederhana dapat menghasilkan identitas budaya yang kuat.",
        },
        {
          tag: "Kebersamaan",
          title: "Gotong Royong & Kepedulian",
          body:
            "Berasal dari tradisi masyarakat Desa Jamblang yang menyiapkan makanan bagi para pekerja pembangunan jalan pada masa kolonial. Penyajian dengan beragam pilihan lauk mencerminkan keberagaman masyarakat yang hidup berdampingan dalam harmoni.",
        },
        {
          tag: "Identitas Budaya",
          title: "Ikon Khas Cirebon",
          body:
            "Menjadi ikon kuliner khas Cirebon yang diwariskan secara turun-temurun dan dikenal luas di Indonesia. Kehadirannya bukan hanya sebagai makanan, tetapi juga representasi sejarah dan kreativitas masyarakat pesisir.",
        },
        {
          tag: "Nilai Sosial",
          title: "Penghargaan pada Selera",
          body:
            "Tradisi memilih lauk sesuai selera menunjukkan penghargaan terhadap kebiasaan individu dalam kebersamaan, setiap orang merdeka meracik porsinya sendiri.",
        },
      ],
    },
    ingredients: {
      overline: "Bahan-Bahan Utama",
      title: "Akar Rasa dari Bumi Cirebon",
      lead:
        "Keunikan Nasi Jamblang lahir dari perpaduan bahan lokal pesisir utara Jawa dan puluhan pilihan lauk yang melimpah.",
      items: [
        {
          name: "Daun Jati",
          role: "Pembungkus Khas",
          body:
            "Dipilih karena ukurannya lebar, kuat, dan mampu memberikan aroma khas yang meresap ke dalam nasi. Daun jati juga menjaga kesegaran makanan lebih lama.",
          img: IMAGES.teakLeaf,
        },
        {
          name: "Nasi Putih",
          role: "Kearifan Lokal",
          body:
            "Nasi putih pulen dibungkus dalam porsi kecil, berasal dari kebiasaan masyarakat Jamblang menyiapkan bekal praktis bagi pekerja pembangunan jalan dan rel kereta.",
          img: IMAGES.riceLeaf,
        },
        {
          name: "Cumi Hitam",
          role: "Lauk Paling Ikonik",
          body:
            "Lauk paling ikonik dalam Nasi Jamblang. Warna hitamnya berasal dari tinta cumi yang dimasak dengan bumbu rempah khas pesisir Cirebon.",
          img: IMAGES.squid,
        },
        {
          name: "Sambal Goreng",
          role: "Pelengkap Utama",
          body:
            "Menghadirkan cita rasa gurih dan pedas yang menjadi pelengkap utama dalam setiap sajian Nasi Jamblang.",
          img: IMAGES.display,
        },
      ],
      varietyTitle: "Akulturasi Kuliner — Aneka Lauk Pilihan",
      varietyBody:
        "Keunikan Nasi Jamblang terletak pada puluhan pilihan lauk yang mencerminkan pertemuan budaya pesisir Cirebon yang terbuka terhadap berbagai pengaruh kuliner.",
      varietyList: [
        "Tahu",
        "Tempe",
        "Sate Kentang",
        "Perkedel",
        "Telur",
        "Ikan Asin",
        "Paru",
        "Semur",
      ],
    },
    techniques: {
      overline: "Teknik & Metode",
      title: "Tangan Tradisi, Bara yang Stabil",
      lead:
        "Nasi putih dibungkus daun jati lalu disajikan dengan sistem prasmanan. Pelanggan memilih sendiri beragam lauk sesuai selera, mulai dari cumi hitam, tahu tempe, sate kentang, hingga ikan asin.",
      tools: [
        {
          name: "Bakul Anyaman Bambu",
          body:
            "Wadah penyimpanan dan penyajian nasi serta aneka lauk agar tetap tertata dan mudah diambil oleh pembeli.",
          img: IMAGES.bambooBasket,
        },
        {
          name: "Daun Jati",
          body:
            "Pembungkus tradisional yang menjaga kesegaran nasi sekaligus memberikan aroma khas yang menjadi ciri utama Nasi Jamblang.",
          img: IMAGES.teakLeaf,
        },
        {
          name: "Tungku Tradisional",
          body:
            "Digunakan untuk menanak nasi dan memasak lauk. Kayu bakar menghasilkan panas yang stabil serta sentuhan cita rasa tradisional pada masakan.",
          img: IMAGES.woodStove,
        },
      ],
    },
    tasting: {
      overline: "Tasting · Pencicipan",
      title: "Profil Sensorik yang Harmonis",
      lead:
        "Perpaduan harmonis antara nasi pulen beraroma daun jati dengan beragam lauk bercita rasa gurih, manis, pedas, dan umami khas Cirebon. Setiap suapan menghadirkan kombinasi tekstur dari nasi yang lembut hingga lauk yang renyah, empuk, atau kenyal.",
      notes: [
        { label: "Nasi Pulen", desc: "Tekstur lembut, butiran nasi yang menyatu hangat." },
        { label: "Aroma Daun Jati", desc: "Wangi khas yang meresap, tak ditemukan pada nasi bungkus biasa." },
        { label: "Variasi Tekstur Lauk", desc: "Renyah, empuk, hingga kenyal dalam satu sajian." },
      ],
      aromaTitle: "Aroma",
      aromaBody:
        "Diperkaya wangi rempah dan aneka lauk seperti cumi hitam, sambal goreng, semur, tahu tempe, dan sate kentang yang menggugah selera, dibingkai aroma khas daun jati sebagai pembungkus tradisional.",
    },
    serving: {
      overline: "Serving · Penyajian",
      title: "Dari Bungkus Daun ke Atas Nampan",
      lead:
        "Estetika Nasi Jamblang hidup dalam dua wajah penyajian yang sama-sama memikat.",
      cards: [
        {
          tag: "Tradisional",
          title: "Bungkusan Daun Jati",
          body:
            "Secara tradisional, nasi jamblang disajikan dalam bungkusan daun jati yang memberikan aroma khas sekaligus menjadi identitas kuliner Cirebon.",
        },
        {
          tag: "Modern",
          title: "Di Atas Piring & Nampan",
          body:
            "Dalam penyajian modern, nasi dibuka di atas piring atau nampan dengan aneka lauk tersusun rapi yang dapat dipilih langsung oleh pelanggan sesuai selera.",
        },
      ],
    },
    experience: {
      overline: "Finding Unique Food Experience",
      title: "Meracik Sendiri, Sehangat Keramahan Cirebon",
      points: [
        "Keunikan Nasi Jamblang terletak pada pengalaman memilih langsung berbagai lauk yang tersaji di etalase. Pengunjung dapat meracik sendiri kombinasi hidangan sehingga setiap porsi menjadi pengalaman yang berbeda.",
        "Interaksi antara pembeli dan penjual dalam proses pemilihan lauk menciptakan suasana yang hangat dan mencerminkan budaya keramahan masyarakat Cirebon.",
      ],
    },
    nutrition: {
      overline: "Nutrition Knowledge",
      title: "Sepiring yang Seimbang & Fleksibel",
      lead:
        "Nasi Jamblang mengandung karbohidrat, protein, dan lemak dari kombinasi nasi putih serta beragam lauk. Nilai gizinya fleksibel, bergantung pada jenis dan jumlah lauk yang dipilih.",
      tableTitle: "Kandungan Gizi (1 porsi nasi + lauk sederhana)",
      table: [
        { k: "Energi", v: "± 350–500 kkal" },
        { k: "Protein", v: "± 12–20 g" },
        { k: "Lemak", v: "± 8–18 g" },
        { k: "Karbohidrat", v: "± 45–60 g" },
      ],
      sources: [
        {
          title: "Sumber Karbohidrat",
          item: "Nasi Putih",
          body: "Menyediakan energi utama bagi tubuh untuk menunjang aktivitas sehari-hari.",
        },
        {
          title: "Sumber Protein",
          item: "Cumi Hitam, Telur, Tahu & Tempe",
          body: "Membantu pertumbuhan, pemeliharaan massa otot, serta perbaikan jaringan tubuh.",
        },
        {
          title: "Sumber Lemak & Mineral",
          item: "Aneka Lauk Khas Cirebon",
          body: "Menyumbangkan lemak, vitamin, dan mineral yang mendukung keseimbangan gizi dalam satu sajian.",
        },
      ],
    },
    ethics: {
      overline: "Ethics & Etiquette · Etika dan Tata Krama",
      title: "Menjaga Warisan, Mengambil Secukupnya",
      quote:
        "Tradisi yang dijaga hari ini adalah identitas yang diwariskan esok.",
      points: [
        "Komitmen para pelaku usaha mempertahankan daun jati sebagai pembungkus khas, meski kemasan modern lebih mudah diperoleh. Tetap menjaga identitas dan warisan kuliner Cirebon tetap lestari.",
        "Banyak warung masih mempertahankan resep turun-temurun dan proses memasak tradisional, termasuk tungku kayu bakar pada usaha keluarga, demi menjaga cita rasa autentik.",
        "Pelanggan dianjurkan mengambil lauk secukupnya dan menghargai keberagaman pilihan sebagai bentuk penghormatan terhadap hasil kerja para perajin dan juru masak.",
      ],
    },
    footer: {
      brand: "Gastronomi Nasi Jamblang",
      tagline: "Warisan Kuliner Pesisir Cirebon",
      rights: "Copyright © 2026 Gastronomi Nasi Jamblang – All Rights Reserved.",
    },
  },

  en: {
    langName: "EN",
    nav: {
      philosophy: "Philosophy",
      ingredients: "Ingredients",
      techniques: "Techniques",
      tasting: "Tasting",
      serving: "Serving",
      experience: "Experience",
      nutrition: "Nutrition",
      ethics: "Ethics",
    },
    hero: {
      overline: "Culinary Heritage of Coastal Cirebon",
      title: "The Gastronomy of Nasi Jamblang",
      subtitle:
        "Celebrating the harmony of taste, history, and togetherness. Savour the softness of rice traditionally wrapped in teak leaves.",
      ctaPrimary: "Explore the Story",
      ctaSecondary: "See Key Ingredients",
    },
    philosophy: {
      overline: "History · Philosophy · Tradition · Social",
      title: "The Philosophy Behind a Single Wrap",
      lead:
        "Nasi Jamblang is more than a dish, it is a representation of the history, tradition, and creativity of Cirebon's coastal people.",
      cards: [
        {
          tag: "Teak Leaf",
          title: "Simplicity & Wisdom",
          body:
            "Wrapped in teak leaves symbolising simplicity, closeness to nature, and the wisdom of the Cirebon community in using local resources. Its signature aroma reflects how a simple tradition can shape a strong cultural identity.",
        },
        {
          tag: "Togetherness",
          title: "Mutual Aid & Care",
          body:
            "Rooted in the tradition of Jamblang Village preparing meals for road-construction workers during the colonial era. The variety of side dishes mirrors a diverse community living side by side in harmony.",
        },
        {
          tag: "Cultural Identity",
          title: "An Icon of Cirebon",
          body:
            "A signature culinary icon of Cirebon, passed down through generations and widely known across Indonesia. Not only as food, but as a living representation of history and coastal creativity.",
        },
        {
          tag: "Social Value",
          title: "Honouring Personal Taste",
          body:
            "The tradition of choosing dishes to one's taste honours individual habit within togetherness, everyone is free to compose their own portion.",
        },
      ],
    },
    ingredients: {
      overline: "Main Ingredients",
      title: "Flavours Rooted in Cirebon's Soil",
      lead:
        "The uniqueness of Nasi Jamblang is born from local ingredients of Java's north coast and dozens of abundant side-dish choices.",
      items: [
        {
          name: "Teak Leaf",
          role: "Signature Wrapper",
          body:
            "Chosen for its broad, strong leaves that lend a distinctive aroma soaking into the rice. While keeping the food fresh for longer.",
          img: IMAGES.teakLeaf,
        },
        {
          name: "White Rice",
          role: "Local Wisdom",
          body:
            "Fluffy white rice wrapped in small portions, a practice born from Jamblang locals preparing practical provisions for road and railway workers.",
          img: IMAGES.riceLeaf,
        },
        {
          name: "Black Squid",
          role: "The Most Iconic Dish",
          body:
            "The most iconic side of Nasi Jamblang. Its black colour comes from squid ink cooked with the signature coastal spices of Cirebon.",
          img: IMAGES.squid,
        },
        {
          name: "Sambal Goreng",
          role: "Essential Companion",
          body:
            "Brings a savoury, spicy character that completes every serving of Nasi Jamblang.",
          img: IMAGES.display,
        },
      ],
      varietyTitle: "Culinary Acculturation — A Spread of Choices",
      varietyBody:
        "Nasi Jamblang's charm lies in its dozens of side-dish options, reflecting Cirebon's coastal culture that is open to many culinary influences.",
      varietyList: [
        "Tofu",
        "Tempeh",
        "Potato Skewers",
        "Perkedel",
        "Egg",
        "Salted Fish",
        "Beef Lung",
        "Semur",
      ],
    },
    techniques: {
      overline: "Techniques & Methods",
      title: "Hands of Tradition, a Steady Ember",
      lead:
        "White rice is wrapped in teak leaves then served buffet-style. Guests pick their own dishes, from black squid and tofu-tempeh to potato skewers and salted fish.",
      tools: [
        {
          name: "Woven Bamboo Basket",
          body:
            "A vessel for storing and serving rice and side dishes, keeping everything neatly arranged and easy for buyers to take.",
          img: IMAGES.bambooBasket,
        },
        {
          name: "Teak Leaf",
          body:
            "The traditional wrapper that preserves the rice's freshness while lending the signature aroma central to Nasi Jamblang.",
          img: IMAGES.teakLeaf,
        },
        {
          name: "Traditional Stove",
          body:
            "Used to cook the rice and side dishes. Firewood provides steady heat and a traditional depth of flavour to the cooking.",
          img: IMAGES.woodStove,
        },
      ],
    },
    tasting: {
      overline: "Tasting",
      title: "A Harmonious Sensory Profile",
      lead:
        "A harmonious blend of fluffy, teak-scented rice with dishes that are savoury, sweet, spicy, and richly umami of Cirebon. Each bite offers a mix of textures from soft rice to crisp, tender, or chewy sides.",
      notes: [
        { label: "Fluffy Rice", desc: "Soft texture, warm grains that come together." },
        { label: "Teak Leaf Aroma", desc: "A signature fragrance, absent from ordinary wrapped rice." },
        { label: "Varied Dish Textures", desc: "Crisp, tender, and chewy in a single serving." },
      ],
      aromaTitle: "Aroma",
      aromaBody:
        "Enriched by spices and dishes such as black squid, sambal goreng, semur, tofu tempeh, and potato skewers, all framed by the distinctive aroma of teak leaves as the traditional wrapper.",
    },
    serving: {
      overline: "Serving",
      title: "From Leaf Wrap to the Tray",
      lead:
        "The aesthetic of Nasi Jamblang lives in two equally captivating faces of serving.",
      cards: [
        {
          tag: "Traditional",
          title: "Teak Leaf Wrapping",
          body:
            "Traditionally, Nasi Jamblang is served in a teak-leaf wrap that gives its signature aroma while standing as an emblem of Cirebon cuisine.",
        },
        {
          tag: "Modern",
          title: "On Plates & Trays",
          body:
            "In modern serving, the rice is opened onto a plate or tray with a neat array of dishes that guests can choose directly to their taste.",
        },
      ],
    },
    experience: {
      overline: "Finding a Unique Food Experience",
      title: "Compose Your Own, Warm as Cirebon Hospitality",
      points: [
        "Nasi Jamblang's uniqueness lies in choosing dishes directly from the display. Visitors compose their own combinations, making every portion a different experience.",
        "The interaction between buyer and seller while choosing dishes creates a warm atmosphere that mirrors the hospitable culture of Cirebon.",
      ],
    },
    nutrition: {
      overline: "Nutrition Knowledge",
      title: "A Balanced, Flexible Plate",
      lead:
        "Nasi Jamblang contains carbohydrates, protein, and fat from white rice and a variety of dishes. Its nutritional value is flexible, depending on the type and amount of sides chosen.",
      tableTitle: "Nutrition Content (1 portion of rice + simple sides)",
      table: [
        { k: "Energy", v: "± 350–500 kcal" },
        { k: "Protein", v: "± 12–20 g" },
        { k: "Fat", v: "± 8–18 g" },
        { k: "Carbohydrate", v: "± 45–60 g" },
      ],
      sources: [
        {
          title: "Carbohydrate Source",
          item: "White Rice",
          body: "Provides the body's main energy to support daily activities.",
        },
        {
          title: "Protein Source",
          item: "Black Squid, Egg, Tofu & Tempeh",
          body: "Supports growth, muscle maintenance, and the repair of body tissue.",
        },
        {
          title: "Fat & Mineral Source",
          item: "Cirebon's Signature Sides",
          body: "Contributes fats, vitamins, and minerals that support nutritional balance in a single serving.",
        },
      ],
    },
    ethics: {
      overline: "Ethics & Etiquette",
      title: "Preserving Heritage, Taking Only Enough",
      quote:
        "The tradition we protect today is the identity we pass on tomorrow.",
      points: [
        "Vendors remain committed to teak-leaf wrapping even as modern packaging grows easier to obtain. Keeping Cirebon's culinary identity and heritage alive.",
        "Many stalls still uphold ancestral recipes and traditional cooking, including wood-fired stoves in family businesses, to preserve authentic flavour.",
        "Guests are encouraged to take only what they need and to value the variety of choices as a mark of respect for the work of artisans and cooks.",
      ],
    },
    footer: {
      brand: "The Gastronomy of Nasi Jamblang",
      tagline: "Culinary Heritage of Coastal Cirebon",
      rights: "Copyright © 2026 The Gastronomy of Nasi Jamblang – All Rights Reserved.",
    },
  },
};
