'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/AUTO_MERGE": "e82f06d940d4835f195ef212771960fb",
".git/COMMIT_EDITMSG": "5574a8d21bfac0dc66a2f896a9b85d42",
".git/config": "b2f19cfeedcff3f2f5fdf064cc04cd00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0092cf9b555246ad0c290a23a8b03977",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d0ff6ca4b8c0cbb51ad89878bf47d67c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "524c2b10d1f7bf8f68c3a1c1505d7c1e",
".git/logs/refs/heads/main": "4535c32d8d4639d2f4e6e01d9c534b1a",
".git/logs/refs/remotes/origin/main": "7f6a30cd862df6963a8c78e38cbac7ef",
".git/objects/00/1ebe7e6351750e418dbc197de3eb455d63ae56": "af9b6ee80832f93b74c2ff4c2ea0948f",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/09/cb229b3121ffba6d2de009d7251c36b78d6e8d": "5b066ff8c86486ca462edb554eecadb9",
".git/objects/0c/93b7e680cbe40208f224ce5537da94d7cd9e16": "d700db7d4d7bf46b8e02b25a75368c80",
".git/objects/10/2b9aba67f8fd2cd98303cc488e75b85e72bdb9": "17459e03fec70b90bdcab0a0351d56d9",
".git/objects/11/3cd3b44a9fb2655f5182815e772fd71b8feb5f": "9f262a2cb2130e36a3319be9d8cb2aee",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/8854df382ed41bf9fec05825400c3008f41076": "7980b2ce552b13642410fe084154c66a",
".git/objects/15/ae9dcef8cef31505eef18d9da8e5dcf8791b93": "d85584243a4b13db871e933c94010583",
".git/objects/19/69b37ae183cfb5fb474acb1cd7d1d04986be24": "0cec87cc6e62fde786a3c28885b39f65",
".git/objects/22/54baf72f104f9bd60c6d41db1cf220c2559418": "d832bb7f81d66f6186683370ff2ffa24",
".git/objects/25/1eea41834ab0beda214d55019a5bf02c41b55c": "39ae07d73f61b6c7c6dbdfb976e089bc",
".git/objects/28/24c4db3eda5a5eed4204c711a2824efea6d932": "ba6bc178582d4a36843e75fcfb1e743a",
".git/objects/2d/01ca75b38e4c21b15ca85927a4b3477f6b8284": "59ca26df42d1bb47ecfd70f79f13082d",
".git/objects/2d/4e33122bb9aa2d71bc5c358889eebe5f5ff1ce": "cae307344acab5f1ed686ddbea6a204d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/69749be9e4c8b90a9204f5efc1a6eb7971d5f4": "0e94379a591f582f1b1d26563545a302",
".git/objects/3d/1fd84cd75fdb81bed3af1f8d74556052134697": "72cde0bbb12eccf00d6269a0bcd3e035",
".git/objects/44/c75b561d5c5e1033a05a806a17f914802d284f": "95b23816957ab7cbfec49e414044a53f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/54/a3ffc46141e4edb97738bccf78eae4b5ba680e": "737b4d2bc60e0c828c34e8cec3fcdd29",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/0b4d14654bae3dc1fb774048219f280de85ea0": "1538e0d41b7f170b5eb009677103a182",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/0b75473ccf4d84d62a054516e38530277e401e": "4706c516fc793112f82e324cca4a99d4",
".git/objects/61/738585920cf28aed46f2e1cb6570f7e1fd31ea": "77ec9c2e63e5d69b3c1e0746ee97190d",
".git/objects/66/3d1de5020e3136376176d106dcfae52c1a7ccf": "866171710bcf0912faba37193a0c65f3",
".git/objects/68/92c67c5e8f8a99521440a0c77451bd9af58f80": "7c1eb1f812a4edd262197bd0c9f4b492",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/4f10246abb7d24e410d633cb5967b936ca15a8": "1ff2053f3b575859b30cf0626672b692",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6f/806474948b2cfc5f8fb3fcea4b49e67c49031a": "3d82e1d66b29d009b566d59acbb63c52",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/c3a69a707847f5a33a46271b594c17b25991dd": "59ce77a20fc667b727368e4566ad4722",
".git/objects/82/baafc33b7732a8ccf9c775fe9b5c7c6ac24672": "6f6744c6bbdfa7377d93e902d1055b3e",
".git/objects/83/744c15a415d5d4dacf533f78b210cbd6b3c9c0": "ae2def11268ec8c97d63f716b22c3811",
".git/objects/87/9a33518a286058dc16d5568da75545afc57297": "d7b7e711608d7179126a33f9a814a04f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/e6d524c92b4ae787b581045bcf9a1ac7f52481": "ce2c8d23f4226a4f1f6acb5dbf2cc022",
".git/objects/90/f8c3565f84268f7b0e55ec0c40f5d2c1a5fb2c": "2fc5563442265119496caeaab76232f0",
".git/objects/98/3d3aa61bbf9355ca2a7cf7dc21d98739794ba8": "49ee17de2721b89c819bf5f911aed4f0",
".git/objects/9b/f25337639ccdd15ccfc97317252e1704f6416b": "2afb5869447af1e852e9e84b7ae05f9b",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/c9b1d186dd27dff4ec534cbd05b7bb6fec0f76": "6ed1d9c50fb13526fb694a60dbf62b5c",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b0/71d342625f983626e884638557a296543527f8": "f5fe9ba9fe13a2a1ffc3736d24f675a9",
".git/objects/b4/6892e60571d332609a84b3fe470bc94baa1b06": "fea6255047c53afb0eada45bf7de20f2",
".git/objects/b4/7bf9a161da34aad531f3b45cd88d12e975178d": "f47c15d3f4c054527d895bc8d7f6a7b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/516e724a27f1bd6ba41b2cd1259e4db7ca5f0b": "c6cd5119f03c977882e4dd44b87271db",
".git/objects/bf/4091fcc64db293532366d61b73c35309ca094a": "3033b7dbd111b56c4f72c201074c72f8",
".git/objects/c0/aa0f519921fd0106b290828a60af545f2d7f0a": "344d7d51d647df3af8c97e6c01a2e38f",
".git/objects/c9/25f94a59623ef380fd152dc978aaa3350c206d": "9b740c923cc5d0f12636f908323de46b",
".git/objects/cc/cf46fd3e060673bbf4feea33ed9be85b32a12e": "334149f1697d9f9c1d55cb907c59760e",
".git/objects/d3/47bfa3503d9b940974523578a0126cfe2f29ac": "33167f5b0c35df03e906e994a16c3ef0",
".git/objects/d5/ce470f6e7e762e0aad2fde1aad88384bb2b7e8": "83bd123653916f4c40c5b9a889e518f4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/cac6e86f64d2a8861d321cd7f3a7ab3fdf7f81": "8fe8404581dd652bc600f98aa61db9ec",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e2/23fa55aae4a7d22939aac862320a2961dae820": "d77d960e5cd1cef62399a2f0c0749eac",
".git/objects/e3/593fb0f3bd412542237820f34fbe74308bfada": "74f7f260766a148eaa27728dd6af1c2b",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/1e8f70cebbcec40eab2503dcb6868f47894885": "766cb0274427bcc678bfef6824f69cf1",
".git/objects/f7/6b68db49cfa81fd44b1c192b53096a69c4d186": "186156995a730a2fe7484ffa2daf44cd",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/f8aa96b7158bbf6f0ca9f6385f7e66f7df4207": "b627785a131511b55eb3b57fc274967d",
".git/ORIG_HEAD": "2ee45564b02b7354a28a326af5635aa4",
".git/refs/heads/main": "2ee45564b02b7354a28a326af5635aa4",
".git/refs/remotes/origin/main": "3a5e9d811a9bac7fdb8bde303b4797a7",
"assets/AssetManifest.json": "6587997c261ec993f867a129becd8e14",
"assets/assets/png/cryptoboard.png": "65eb901481ac449932c5484b633c1b6a",
"assets/assets/png/foster.png": "fba61b9ad77896a0ce7047be44396864",
"assets/assets/png/gyme.png": "28d3bdec220b730c85d1c5ba83d42e55",
"assets/assets/png/sysfar.png": "5dbd25c0e8abdc10d121783c775681b5",
"assets/assets/png/webtoonapp.jpg": "2c29a5e0d01f0499626136363c002caf",
"assets/assets/png/webtoonapp2.jpg": "8680319a195c961942d1d4da9c80dce7",
"assets/assets/png/webtoonapp3.jpg": "ab70bab40bcb1a0f6e7bc07a0ae91f52",
"assets/assets/svg/arrow_left.svg": "0b392777c24e0e9524270af7860478f6",
"assets/assets/svg/arrow_right.svg": "7b267ec7c8b81ce3a3aab363851c3e23",
"assets/assets/svg/github.svg": "a048ee922dd3bb64a32c3d3a1b26b5ef",
"assets/assets/svg/linkedin.svg": "d1e71c6fc9445d06e52d612cace47203",
"assets/FontManifest.json": "7b68fe41621a7ee1f32085cb80615f60",
"assets/fonts/FiraCode-Bold.ttf": "5dc8fc4a9c756c224ecc7643a1b67212",
"assets/fonts/FiraCode-Medium.ttf": "ba8aef5e5d54cd6f3170408ea525a339",
"assets/fonts/FiraCode-Regular.ttf": "3b9ae46edda611c5567610d2efd3e703",
"assets/fonts/FiraSans-Black.ttf": "608b764a1cc4218d10f27600ef530fa6",
"assets/fonts/FiraSans-Bold.ttf": "382e230417d252a0cb16c7d491b030c7",
"assets/fonts/FiraSans-ExtraBold.ttf": "ab5e89ae3427a97125ae380280b1df7f",
"assets/fonts/FiraSans-ExtraLight.ttf": "7b01a1d6efbf405007495ea871f58d42",
"assets/fonts/FiraSans-Light.ttf": "20161a557e36034d7255f22dadab5f58",
"assets/fonts/FiraSans-Medium.ttf": "f97963c595e8acb87013c1d4e1c3c9f9",
"assets/fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"assets/fonts/FiraSans-SemiBold.ttf": "eb5e811f2fe0408c9d0a552fcf1fb390",
"assets/fonts/FiraSans-Thin.ttf": "8205dc3e1f7953b4f52ed6a23977a6be",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/NOTICES": "ddb3e37c93d48d59906afd499f9f7cb1",
"assets/png/cryptoboard.png": "65eb901481ac449932c5484b633c1b6a",
"assets/png/foster.png": "fba61b9ad77896a0ce7047be44396864",
"assets/png/gyme.png": "28d3bdec220b730c85d1c5ba83d42e55",
"assets/png/sysfar.png": "5dbd25c0e8abdc10d121783c775681b5",
"assets/png/webtoonapp.jpg": "2c29a5e0d01f0499626136363c002caf",
"assets/png/webtoonapp2.jpg": "8680319a195c961942d1d4da9c80dce7",
"assets/png/webtoonapp3.jpg": "ab70bab40bcb1a0f6e7bc07a0ae91f52",
"assets/svg/arrow_left.svg": "eb78c9a38ae36f15d3fb8a3a633e4dc6",
"assets/svg/arrow_right.svg": "cfe99ec74fcaca7f12b845e7985eb300",
"assets/svg/github.svg": "b5cce38d0792db8632b7e2860de1df2a",
"assets/svg/linkedin.svg": "d47813f77e7906c225892fa1bc7bf555",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "7bd89bfd5e984020f1e5c5e9b129df99",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0bbb7b3ec8750eaa925ddcc1b3464352",
"/": "0bbb7b3ec8750eaa925ddcc1b3464352",
"main-icon.png": "7bd89bfd5e984020f1e5c5e9b129df99",
"main.dart.js": "575a2f019107ba21fe2b3a447b4a7f13",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
