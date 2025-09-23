// index.js (FULL PRODUCTS - FIXED + EDIT BUTTON)
// — Support terms string/array (newline/bullets)
// — Tombol "Download .txt" diubah menjadi "Edit teks / Selesai Edit"

document.addEventListener('DOMContentLoaded', () => {
  /* ======================
     CONFIG
  ====================== */
  const GENERAL_NOTES = ``;

  const PRODUCTS = [
    // Netflix
    {
      id: 'netflix',
      name: 'Netflix',
      uniqueCode: true,
      prefix: 'AMD',
      plans: [
        { id: 'nfx-3d-1', name: 'Netflix Premium (3 Hari)', desk: '1 Profile, Kualitas 4K UHD', price: 'Rp. 10,500' },
        { id: 'nfx-30d-1', name: 'Netflix Premium (30 Hari)', desk: '1 Profile, Kualitas 4K UHD', price: 'Rp. 35,500' },
        { id: 'nfx-family-30d-1', name: '[PO] Netflix Family Full 5 Profile (30 Hari)', desk: '5 Profile, Kualitas 4K UHD', price: 'Rp. 155,500' }
      ],
      fields: [
        { key: 'email', label: 'Email' },
        { key: 'password', label: 'Password' },
        { key: 'profile', label: 'Profile (opsional)' },
        { key: 'pin', label: 'Pin (opsional)' }
      ],
      terms: `Syarat Ketentuan Netflix:
📌 Jangan Spam Login Saat Salah Password
Cara 1:
Periksa dan ketik ulang email & password. Pastikan tidak ada spasi.
Ketik manual, jangan copy—paste.
Tunggu ±10 detik sebelum klik masuk.
Cara 2:
Ganti jaringan & hapus data aplikasi.
Coba pakai WiFi lain atau hotspot HP.
Jika masih bermasalah, uninstall lalu install ulang.

📌 Jika muncul pesan error:
"Cannot connect to Netflix" / "Unable to connect to Netflix. Please try again."
👉 Masalah ada di perangkat/jaringan.
Solusi: tunggu koneksi stabil atau coba hotspot HP.`
    },

    // CapCut
    {
      id: 'capcut',
      name: 'CapCut',
      uniqueCode: false,
      plans: [
        { id: 'cct-7d', name: 'CapCut Pro (7 Hari)', desk: 'Private Akun, Garansi 7 Hari', price: 'Rp. 10,500' },
        { id: 'cct-30d', name: 'CapCut Pro (30 Hari)', desk: 'Private Akun, Garansi 7 Hari', price: 'Rp. 20,500' },
        { id: 'cct-60d', name: 'CapCut Pro (60 Hari) 30x2', desk: 'Private Akun, Garansi 14 Hari', price: 'Rp. 35,500' },
        { id: 'cct-plus-30d', name: 'CapCut Pro+ (30 Hari)', desk: 'Private Akun, Full Garansi', price: 'Rp. 25,500' },
        { id: 'cct-plus-60d', name: 'CapCut Pro+ (60 Hari) 30x2', desk: 'Private Akun, Full Garansi', price: 'Rp. 45,500' },
        { id: 'cct-plus-180d', name: 'CapCut Pro+ Full 6 Bulan', desk: 'Private Akun', price: 'Rp. 200,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: [
        'Link Email Akses : generator.email/MasukanEmailDisini',
        'Cara Ganti Password dan Email Capcut bisa ditonton di Reels : https://shortisme.com/WDdXGE',
        'Syarat dan Ketentuan Pembelian Capcut',
        'Garansi pada saat pertama kali login',
        'Disarankan Hapus Data aplikasi sebelum login! (kecuali masih ada project sebelumnya yg belum selesai edit)',
        'Login hanya via Email',
        'Garansi Sesuai Keterangan',
        'Hanya garansi Backfree bukan kesalahan sendiri (disable/hack/pelanggaran)',
        'Login PC bisa scan via QR',
        'Jika masa aktif pro-nya sudah habis silahkan log out, dan ganti akun',
        'Jika terdapat kendala silahkan hubungi admin'
      ]
    },

    // YouTube digabung
    {
      id: 'youtube',
      name: 'YouTube Premium',
      uniqueCode: false,
      plans: [
        { id: 'yt-fam-1m',   name: 'YouTube Premium - Famhead (1 Bulan)',  desk: 'No Garansi, Akun Famhead',                                             price: 'Rp. 10,500' },
        { id: 'yt-ind-44d',  name: 'YouTube Premium - Indplan (44 Hari)',   desk: 'No Garansi, Individual Plan',                                         price: 'Rp. 13,500' },
        { id: 'yt-nogar-3m', name: 'YouTube Premium - NoGar (3 Bulan)',     desk: 'No Garansi, Langsung 3 Bulan, Bukan Gsuite, Free Verif OTP 1x',       price: 'Rp. 33,500' },
        { id: 'yt-full-3m',  name: 'YouTube Premium - FullGar (3 Bulan)',   desk: 'Full Garansi Disable & Backfree',                                     price: 'Rp. 38,500' }
      ],
      fields: [
        { key: 'email', label: 'Email' },
        { key: 'password', label: 'Password' }
      ],
      terms: 'YouTube Premium: pilih jenis paket (Famhead/Indplan/NoGar/FullGar) sesuai kebutuhan.'
    },

    // Remini
    {
      id: 'remini',
      name: 'Remini Pro',
      uniqueCode: false,
      plans: [
        { id: 'remini-14d', name: 'Remini Pro (14 Hari)', desk: 'Via Login Google Play Store & Redeem Code Web', price: 'Rp. 13,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Remini Pro: login via Google Play Store / redeem code web.'
    },

    // Spotify
    {
      id: 'spotify',
      name: 'Spotify',
      uniqueCode: false,
      plans: [
        { id: 'spf-1m-nogar', name: 'Spotify Individual (1 Bulan No Garansi)', desk: 'All Device, Private Akun', price: 'Rp. 10,500' },
        { id: 'spf-1m-full', name: 'Spotify Individual (1 Bulan Full Garansi)', desk: 'All Device, Full Garansi, Private Akun', price: 'Rp. 15,500' },
        { id: 'spf-family', name: 'Spotify Family plan (1 Bulan Full Garansi)', desk: 'Akun Seller, Full Garansi, Bisa Perpanjang di Akun yang sama', price: 'Rp. 19,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Spotify: pilih individual atau family sesuai kebutuhan.'
    },

    // AI Chat GPT+
    {
      id: 'ai-gpt',
      name: 'AI Chat GPT+',
      uniqueCode: false,
      plans: [
        { id: 'gpt-1w', name: 'AI Chat GPT+ (1 Minggu)', desk: 'Full Garansi, Sharing Beda Folder', price: 'Rp. 10,500' },
        { id: 'gpt-1m', name: 'AI Chat GPT+ (1 Bulan)', desk: 'Full Garansi, Sharing Beda Folder', price: 'Rp. 20,500' },
        { id: 'gpt-priv-1m', name: 'AI Chat GPT+ Private (1 Bulan)', desk: 'Via Invite email GPT, Full Garansi, Akun Buyer', price: 'Rp. 60,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'AI Chat GPT+: perhatikan jenis sharing atau private.'
    },

    // Zoom Meeting Pro
    {
      id: 'zoom',
      name: 'Zoom Meeting Pro',
      uniqueCode: false,
      plans: [
        { id: 'zoom-14d', name: 'Zoom Meeting Pro (14 Hari)', desk: 'Private Akun, 100 Peserta, Full Garansi', price: 'Rp. 30,500' },
        { id: 'zoom-7d', name: 'Zoom Meeting Pro (7 Hari)', desk: 'Private Akun, 100 Peserta, Full Garansi', price: 'Rp. 20,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Zoom Meeting Pro: private akun, full garansi. (Kalau mau ganti password bisa cek reels ini : https://shortisme.com/q0TBJZ )'
    },

    // Canva
    {
      id: 'canva',
      name: 'Canva',
      uniqueCode: false,
      plans: [
        { id: 'canva-edu', name: 'Canva EDU Lifetime (Seumur Hidup)', desk: 'Via Invite, Garansi 5 Bulan', price: 'Rp. 15,500' },
        { id: 'canva-pro', name: 'Canva Pro Owner (30 Hari)', desk: 'Full Garansi', price: 'Rp. 10,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Canva Edu : Silahkan Cek Email Secara Berkala, akan ada invite untuk join school/organization dari admin, join dan silahkan buka profile di canva. Silahkan pilih mode school/organization'
    },

    // WeTV
    {
      id: 'wetv',
      name: 'WeTV Private',
      uniqueCode: false,
      plans: [
        { id: 'wetv-1m', name: 'WeTV Private (1 Bulan)', desk: 'Private Akun, Bergaransi', price: 'Rp. 18,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'WeTV: private akun bergaransi.'
    },

    // Bstation
    {
      id: 'bstation',
      name: 'Bstation Private',
      uniqueCode: false,
      plans: [
        { id: 'bst-1m', name: 'Bstation Private (1 Bulan)', desk: 'Full Garansi', price: 'Rp. 30,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Bstation: full garansi.'
    },

    // Alight Motion
    {
      id: 'alight',
      name: 'Alight Motion',
      uniqueCode: false,
      plans: [
        { id: 'alight-1y', name: 'Alight Motion (1 Tahun)', desk: 'Private Akun, Garansi 6 Bulan, Support Android & iOS', price: 'Rp. 15,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Alight Motion: dukungan Android & iOS.'
    },

    // HBO Max
    {
      id: 'hbomax',
      name: 'HBO Max',
      uniqueCode: false,
      plans: [
        { id: 'hbomax-1m', name: 'HBO Max Sharing (1 Bulan)', desk: 'Bergaransi, Plan Ultimate', price: 'Rp. 20,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'HBO Max: plan Ultimate.'
    },

    // Google Drive bundle
    {
      id: 'gdrive',
      name: 'Google Drive 2TB + Gemini AI Pro + Veo3',
      uniqueCode: false,
      plans: [
        { id: 'gdrive-1y', name: 'Google Drive 2TB + Gemini AI Pro + Veo3 (1 Tahun)', desk: 'Private Akun, Akun Seller, Garansi Login.', price: 'Rp. 25,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Google Drive bundle: private akun, garansi login.'
    },

    // Picsart
    {
      id: 'picsart',
      name: 'Picsart Member',
      uniqueCode: false,
      plans: [
        { id: 'pics-1m', name: 'Picsart Member (1 Bulan)', desk: 'Garansi Backfree, Private Akun', price: 'Rp. 10,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Picsart: garansi backfree, private akun.'
    },

    // Vidio Platinum
    {
      id: 'vidio',
      name: 'Vidio Platinum',
      uniqueCode: false,
      plans: [
        { id: 'vidio-1y-tv', name: 'Vidio Platinum TV (1 Tahun)', desk: 'Garansi 1 Bulan, TV Only, Private Akun', price: 'Rp. 15,500' },
        { id: 'vidio-1m-mobile', name: 'Vidio Platinum Mobile (1 Bulan)', desk: 'Garansi, Mobile Only, Private Akun', price: 'Rp. 27,500' },
        { id: 'vidio-all-1m', name: 'Vidio Platinum All Device (1 Bulan)', desk: 'ALL DEVICE, PRIVATE AKUN, GARANSI', price: 'Rp. 40,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Vidio: cek device compatibility.'
    },

    // Prime Video
    {
      id: 'prime',
      name: 'Prime Video',
      uniqueCode: false,
      plans: [
        { id: 'prime-1m', name: 'Prime Video (1 Bulan)', desk: 'Private Akun, Bergaransi, Include Email Akses', price: 'Rp. 15,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Prime Video: include email akses.'
    },

    // Mola TV
    {
      id: 'mola',
      name: 'Mola TV Private',
      uniqueCode: false,
      plans: [
        { id: 'mola-3m', name: 'Mola TV Private (3 Bulan)', desk: 'No Garansi, All Device', price: 'Rp. 17,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Mola TV: no garansi.'
    },

    // Disney+
    {
      id: 'disney',
      name: 'Disney+',
      uniqueCode: false,
      plans: [
        { id: 'disney-1m-sh', name: 'Disney+ Sharing (1 Bulan)', desk: 'Sharing 5 User, Plan Premium, All Device', price: 'Rp. 20,500' },
        { id: 'disney-1m-priv', name: 'Disney+ Premium Private (1 Bulan)', desk: 'Akun Sendiri, Plan Premium, Full Garansi', price: 'Rp. 50,500' },
        { id: 'disney-1y-sh', name: 'Disney+ Sharing (1 Tahun)', desk: 'Sharing 5 User, Plan Premium, All Device', price: 'Rp. 70,500' },
        { id: 'disney-1y-priv', name: 'Disney+ Premium Private (1 Tahun)', desk: 'Akun Sendiri, Plan Premium, Full Garansi', price: 'Rp. 270,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Disney+: pilih sharing atau private.'
    },

    // Loklok
    {
      id: 'loklok',
      name: 'Loklok',
      uniqueCode: false,
      plans: [
        { id: 'lok-1m', name: 'Loklok Sharing VIP (1 Bulan)', desk: 'Sharing Akun, Full Garansi', price: 'Rp. 15,000' },
        { id: 'lok-3m', name: 'Loklok Sharing VIP (3 Bulan)', desk: 'Sharing Akun, Full Garansi', price: 'Rp. 30,000' },
        { id: 'lok-6m', name: 'Loklok Sharing VIP (6 Bulan)', desk: 'Sharing Akun, Full Garansi', price: 'Rp. 45,000' },
        { id: 'lok-1m-priv', name: 'Loklok Private VIP (1 Bulan)', desk: 'Private Akun, Full Garansi', price: 'Rp. 35,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Loklok: sharing vs private.'
    },

    // VPNs
    {
      id: 'vpn',
      name: 'VPN',
      uniqueCode: false,
      plans: [
        { id: 'vpn-ex-30d', name: 'VPN Express (30 Hari)', desk: 'Private Akun', price: 'Rp. 10,000' },
        { id: 'vpn-hma-1m', name: 'VPN HMA (1 Bulan)', desk: 'Private Akun, Full Garansi, Login by Kode', price: 'Rp. 10,000' },
        { id: 'vpn-surf-2m', name: 'VPN Surfshark (2 Bulan)', desk: 'Private Akun, Bergaransi', price: 'Rp. 20,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'VPN: private akun, cek metode login.'
    },

    // VIU
    {
      id: 'viu',
      name: 'VIU',
      uniqueCode: false,
      plans: [
        { id: 'viu-1m', name: 'VIU (1 Bulan)', desk: 'Full Garansi Backfree, Private Anti Limit, All Device', price: 'Rp. 5,500' },
        { id: 'viu-3m', name: 'VIU (3 Bulan)', desk: 'Full Garansi Backfree, Private Anti Limit, All Device', price: 'Rp. 10,500' },
        { id: 'viu-6m', name: 'VIU (6 Bulan)', desk: 'Full Garansi Backfree, Private Anti Limit, All Device', price: 'Rp. 15,500' },
        { id: 'viu-12m', name: 'VIU (12 Bulan)', desk: 'Full Garansi Backfree, Private Anti Limit, All Device', price: 'Rp. 20,500' },
        { id: 'viu-lifetime', name: 'VIU Premium Lifetime', desk: 'Private Akun, Akses Mail, Exp 20 Nov 2286', price: 'Rp. 30,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'VIU: lifetime punya expiry khusus.'
    },

    // Vision+ PayTV
    {
      id: 'vision',
      name: 'Vision+ PayTV',
      uniqueCode: false,
      plans: [
        { id: 'vision-1m', name: 'Vision+ PayTV (1 Bulan)', desk: 'Private Akun, Garansi Backfree, All Device', price: 'Rp. 15,000' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'Vision+: all device support.'
    },

    // IQIYI
    {
      id: 'iqiyi',
      name: 'IQIYI',
      uniqueCode: false,
      plans: [
        { id: 'iq-std-1m', name: 'IQIYI VIP Standar (1 Bulan)', desk: 'Plan Standar, Private Akun, Garansi Backfree', price: 'Rp. 20,500' },
        { id: 'iq-prem-1m', name: 'IQIYI VIP Premium (1 Bulan)', desk: 'Plan Premium, Private Akun, Garansi Backfree', price: 'Rp. 27,500' }
      ],
      fields: [{ key: 'email', label: 'Email' }, { key: 'password', label: 'Password' }],
      terms: 'IQIYI: plan standar vs premium.'
    }
  ];

  /* ======================
     DOM refs & helpers
  ====================== */
  const $ = id => document.getElementById(id);
  const productSel = $('product');
  const planSel = $('plan');
  const dynamicFieldsWrap = $('dynamicFields');
  const termsBox = $('termsBox');
  const outputPre = $('output');
  const priceInput = $('price');
  const prefixInput = $('prefix');
  const deskInfo = $('deskInfo');

  /* ===== build plan serials (001,002...) ===== */
  const planSerial = {};
  (function buildPlanSerials() {
    let counter = 1;
    PRODUCTS.forEach(p => {
      (p.plans || []).forEach(pl => {
        planSerial[pl.id] = String(counter).padStart(3, '0');
        counter++;
      });
    });
  })();

  const findProductById = id => PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const findPlan = (product, planId) =>
    (product.plans || []).find(pl => pl.id === planId) || (product.plans && product.plans[0]);

  function randCode(len = 12) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let s = '';
    for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }

  function formatDateIndo(d = new Date()) {
    const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const date = d instanceof Date ? d : new Date(d);
    const day = date.getDate();
    const month = namaBulan[date.getMonth()];
    const year = date.getFullYear(); // fixed
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${year} pukul ${hh}.${mm}`;
  }

  function escapeHtml(s) {
    return (s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ======================
     UI render functions
  ====================== */
  function populateProductSelect() {
    productSel.innerHTML = '';
    PRODUCTS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.name;
      productSel.appendChild(opt);
    });
  }

  function populatePlanSelect(product) {
    planSel.innerHTML = '';
    (product.plans || []).forEach(pl => {
      const opt = document.createElement('option');
      opt.value = pl.id;
      opt.textContent = `${planSerial[pl.id] || '000'}. ${pl.name} — ${pl.price}`;
      planSel.appendChild(opt);
    });
  }

  function renderDynamicFields(product) {
    dynamicFieldsWrap.innerHTML = '';
    (product.fields || []).forEach(f => {
      const lbl = document.createElement('label');
      lbl.className = 'small';
      lbl.textContent = f.label;
      const inp = document.createElement('input');
      inp.id = 'fld_' + f.key;
      inp.placeholder = f.label;
      dynamicFieldsWrap.appendChild(lbl);
      dynamicFieldsWrap.appendChild(inp);
    });
  }

  function stringifyTerms(terms) {
    if (!terms) return '';
    if (Array.isArray(terms)) return terms.map(t => `• ${t}`).join('\n');
    return String(terms);
  }

  function renderTerms(product) {
    const left = stringifyTerms(product.terms);
    const right = GENERAL_NOTES ? `\n\n${GENERAL_NOTES}` : '';
    if (termsBox) termsBox.textContent = `${left}${right}`;
  }

  function onProductChange() {
    const product = findProductById(productSel.value);
    populatePlanSelect(product);
    const firstPlan = (product.plans && product.plans[0]) || null;
    deskInfo.textContent = firstPlan ? `Keterangan: ${firstPlan.desk}` : '';
    priceInput.value = firstPlan ? firstPlan.price : '';
    renderDynamicFields(product);
    renderTerms(product);

    // Prefix hanya untuk produk yang butuh uniqueCode (Netflix)
    const prefixGroup = document.getElementById('prefixGroup');
    if (product.uniqueCode) {
      prefixGroup.style.display = 'block';
      prefixInput.value = product.prefix || 'AMD';
    } else {
      prefixGroup.style.display = 'none';
      prefixInput.value = '';
    }
  }

  function onPlanChange() {
    const product = findProductById(productSel.value);
    const plan = findPlan(product, planSel.value);
    if (plan) {
      deskInfo.textContent = 'Keterangan: ' + plan.desk;
      priceInput.value = plan.price;
    }
  }

  /* ======================
     Generate output
  ====================== */
  function generateOutputText() {
    const product = findProductById(productSel.value);
    const plan = findPlan(product, planSel.value);

    const dataLines = (product.fields || []).map(f => {
      const el = document.getElementById('fld_' + f.key);
      const val = (el && el.value) ? el.value : '-';
      return { k: f.label, v: val };
    });

    const kode = product.uniqueCode ? ((prefixInput.value || 'AMD') + '-' + randCode(12)) : '-';
    const price = priceInput.value || (plan && plan.price) || '-';
    const tanggal = formatDateIndo(new Date());

    // hanya tampilkan nama paket (plan), bukan nama aplikasi + plan
    const displayName = (plan && plan.name) || (product && product.name) || '-';

    let out = '';
    out += '───【 BABAYSHOP.ID 】───\n';
    out += `┊･Kode Unik : ${kode}\n`;
    out += `┊･Nama Produk : ${displayName}\n`;
    out += `┊･Harga : ${price}\n`;
    out += `┊･Tanggal/Jam : ${tanggal}\n`;
    out += '───【 ACCOUNT INFO 】───\n';
    dataLines.forEach(dl => { out += `- ${dl.k}: ${dl.v}\n`; });
    out += '─────────────────────\n';
    if (plan && plan.desk) out += 'Keterangan Plan: ' + plan.desk + '\n\n';

    const termsText = stringifyTerms(product.terms);
    if (termsText) out += termsText + '\n\n';
    if (GENERAL_NOTES) out += GENERAL_NOTES + '\n';

    outputPre.textContent = out;
  }

  /* ======================
     Utilities: copy / EDIT toggle / clear / print
  ====================== */
  let isEditing = false;
  let editTextarea = null;

  function toggleEditText() {
    const btn = document.getElementById('downloadTxt');
    if (!isEditing) {
      // masuk mode edit
      editTextarea = document.createElement('textarea');
      editTextarea.id = 'outputEditor';
      editTextarea.value = outputPre.textContent;

      // style mirip <pre>
      editTextarea.style.width = '100%';
      editTextarea.style.minHeight = outputPre.offsetHeight + 'px';
      editTextarea.style.padding = '14px';
      editTextarea.style.borderRadius = '8px';
      editTextarea.style.border = '1px solid rgba(0,0,0,0.12)';
      editTextarea.style.background = getComputedStyle(outputPre).backgroundColor;
      editTextarea.style.color = 'inherit';
      editTextarea.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
      editTextarea.style.whiteSpace = 'pre-wrap';

      outputPre.style.display = 'none';
      outputPre.parentNode.insertBefore(editTextarea, outputPre.nextSibling);

      btn.innerHTML = '<i class="fas fa-check"></i> Done Edit';
      isEditing = true;
      editTextarea.focus();
      editTextarea.setSelectionRange(editTextarea.value.length, editTextarea.value.length);
    } else {
      // simpan & keluar edit
      outputPre.textContent = editTextarea.value;
      editTextarea.remove();
      editTextarea = null;
      outputPre.style.display = 'block';

      btn.innerHTML = '<i class="fas fa-edit"></i> Edit Text';
      isEditing = false;
    }
  }

  function copyToClipboard() {
    const text = isEditing ? editTextarea.value : outputPre.textContent;
    navigator.clipboard.writeText(text)
      .then(() => alert('Text copied to clipboard successfully!'))
      .catch(() => alert('Failed to copy text to clipboard'));
  }

  function clearOutput() {
    if (isEditing) editTextarea.value = '';
    else outputPre.textContent = '';
  }

  function previewPrint() {
    const text = isEditing ? editTextarea.value : outputPre.textContent;
    const w = window.open('', '_blank');
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>Galaxy Receipt</title>
      <style>
        body {
          font-family: 'Courier New', monospace;
          padding: 32px;
          white-space: pre-wrap;
          background: linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 100%);
          color: #F8FAFC;
          min-height: 100vh;
        }
        pre {
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 16px;
          padding: 24px;
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
      </style>
      </head><body><pre>${escapeHtml(text)}</pre></body></html>`;
    w.document.open(); w.document.write(html); w.document.close(); w.focus();
    setTimeout(() => w.print(), 300);
  }

  /* ======================
     Hook events & init
  ====================== */
  function hookEvents() {
    productSel.addEventListener('change', onProductChange);
    planSel.addEventListener('change', onPlanChange);
    document.getElementById('generate').addEventListener('click', generateOutputText);
    document.getElementById('copyText').addEventListener('click', copyToClipboard);
    document.getElementById('downloadTxt').addEventListener('click', toggleEditText); // <- jadi Edit
    document.getElementById('clear').addEventListener('click', clearOutput);
    document.getElementById('previewPDF').addEventListener('click', previewPrint);
  }

  function init() {
    if (!productSel || !planSel || !outputPre) {
      console.error('Elemen UI tidak lengkap. Pastikan HTML memiliki elemen dengan ID yang diperlukan.');
      return;
    }
    populateProductSelect();
    hookEvents();
    productSel.selectedIndex = 0;
    onProductChange(); // akan otomatis hide prefix bila bukan Netflix

    // set label tombol awal
    const btn = document.getElementById('downloadTxt');
    if (btn) btn.innerHTML = '<i class="fas fa-edit"></i> Edit Text';
  }

  init();
});