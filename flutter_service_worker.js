'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fd47289b51a79cd3331aec193302fbc0",
"index.html": "9b1b7a037a8ebe5c223f590cc2fd7557",
"/": "9b1b7a037a8ebe5c223f590cc2fd7557",
"main.dart.js": "4b4816d3dfe1112a4a04996fadc8c3fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cf1daffebaca24ff5b4355a4bfcc4c6b",
"assets/AssetManifest.json": "d758cdded19af8483f92706e509d1a0e",
"assets/NOTICES": "65e1930d1a1333d2b84a42cbfc0f6206",
"assets/FontManifest.json": "305e36001817c0f383e5cd38d0435a27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/world.png": "9e564ed2a2d1e9fac5ec4cc4c04e5694",
"assets/assets/images/skull/flying.png": "c266245d8cf3abe7a052c6f4e4d32527",
"assets/assets/images/skull/hit.png": "872d23e78ae9fd34510a673a64886a04",
"assets/assets/images/bullet.png": "fd603f22922a768d414b1de8b5fbd0d4",
"assets/assets/images/fruits.png": "ee476e3741dd531bf78570a4c440253a",
"assets/assets/images/dirt.png": "d42c872a8b2aa0f0d3ae4141ec45c579",
"assets/assets/images/bee/Bullet.png": "863468dcbd22e06ae7c8f312fb18d153",
"assets/assets/images/bee/idle.png": "c7d30f26eb55a96699a308eb1fbd0acb",
"assets/assets/images/bee/hit.png": "3c0e8d639eff15518bca5b9f7989bdc0",
"assets/assets/images/bee/Bullet%2520Pieces.png": "767967808e69f8d6a3a1f0dae675dce0",
"assets/assets/images/bee/attack.png": "d6bd004e2b12a43722c631643877e8bb",
"assets/assets/images/mushrooms.png": "43f93eb84cde7f2fd1467d33002df392",
"assets/assets/images/empty.png": "c7953de2cf490f5c2bddd6d02864dc3c",
"assets/assets/images/map.png": "397e60d150185bf9961ae5cf59f0cbbd",
"assets/assets/images/creature.png": "5e52950ac303c1b529e9005317459665",
"assets/assets/images/water2.png": "5f8a9104bbbdb22845a8b29aca23cc47",
"assets/assets/images/boss/attack-left.png": "bfc24fded946e5c3a3dda9f4d85c9467",
"assets/assets/images/boss/run-right.png": "406653b9909821ca064552e5ac0ff4e8",
"assets/assets/images/boss/hit-left.png": "b75ccc349e23c9f422b07cef2bfab66a",
"assets/assets/images/boss/up.png": "d6586c949ff48be26e34c461de295e37",
"assets/assets/images/boss/attack-right.png": "e7df2f63db3d5989c3b7ed1d3d1d512b",
"assets/assets/images/boss/idle.png": "d41b7fa29493aefcb66f02ec4c3fc006",
"assets/assets/images/boss/down.png": "bb0540b9eeccb556af4a8212452a137e",
"assets/assets/images/boss/dead-left.png": "b5c4b9505e083494f7f1d685ae419332",
"assets/assets/images/boss/dead-right.png": "f74331c8916fdd3e65f28958acfeb3c1",
"assets/assets/images/boss/hit-right.png": "b8f75d758e531af4a9350865cd9023fc",
"assets/assets/images/boss/run-left.png": "4a27c5425fd5f03f51c04b8dedb21ece",
"assets/assets/images/water1.png": "661280124df0ada8c791a287bda58739",
"assets/assets/images/heart.png": "6ddb2ac32b3f71ffb3217d50f64974fe",
"assets/assets/images/grass.png": "0971148f5367342ff82215806f05ced8",
"assets/assets/images/ember.png": "3027f5f0b80b46ee1ae2463f2ab3d1ce",
"assets/assets/images/base.png": "4c8731a109b98b8d30cac7e660a984b0",
"assets/assets/images/wall.png": "0ef4d6a75b14f60c1f670f6a23bc6a85",
"assets/assets/images/flower.png": "613579f9f55aeedd7c573cfbacfdb6eb",
"assets/assets/images/player_spritesheet.png": "284ddc25658720ea0c2dcff889362e3d",
"assets/assets/images/bomb_ptero.png": "5d8ecf64f191fbb3a3625eae665ce18a",
"assets/assets/images/LightShadow_pipo.png": "5a16696c154ece7b3d86899370e0ce7e",
"assets/assets/tiles/map.tmx": "9a41ecc44b8f0e5ec9abcf6f2bc2ce86",
"assets/assets/audio/sword.mp3": "e87e13d1f8c5e60fcfde7e16e0b0b0a4",
"assets/assets/audio/eat.mp3": "373a0668350b40ae38a50bb7e125b1b2",
"assets/assets/audio/laser.mp3": "56b2362a235004907027c0cc9654e9f7",
"assets/assets/audio/bgm.mp3": "0466433ce33c4df06743075bef864477",
"assets/assets/fonts/rowdies.ttf": "b765a76d63821e1d811d7b2240e49ace",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
