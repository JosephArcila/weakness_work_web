'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "fbc2ad27824afa56e1461cb736ad8b22",
"assets/AssetManifest.smcbin": "310a1596969dc7c0bbd8271cc139bb40",
"assets/FontManifest.json": "10633e039e86df42774b99973b6d151d",
"assets/fonts/KleeOne-Regular.ttf": "2b20142b4fc98b3e2102a54a90d19904",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/airsquat.jpg": "be36bfd236d4b8dfedc5200c3cd51cba",
"assets/images/deadlift.jpg": "2aefac07d7d3376b5b550e73d9abf9e3",
"assets/images/decagon.png": "2d410c626511c226d91b7bdf6559ff73",
"assets/images/dumbbelldeadlift.jpg": "b64b780d4be74128b6e0629ddffbfea9",
"assets/images/dumbbellfrontsquat.jpg": "f360dccf773762f477953d80de1db000",
"assets/images/dumbbellhangpowerclean.jpg": "fd7b71128006616eb219d9f939d0e90c",
"assets/images/dumbbellhangpowersnatch.jpg": "9518cfb277035a96095c39963c3e433e",
"assets/images/dumbbelloverheadsquat.jpg": "512b1ea6544df5f556cc2f3daad1b729",
"assets/images/dumbbellpress.jpg": "ac104a1c0c922a8f8d1cf94e509f484d",
"assets/images/dumbbellsnatch.jpg": "ba800c7479f23e20d83df415b473a92c",
"assets/images/dumbbellthruster.jpg": "d6691d1bc9360b4c96b5895c76b9aace",
"assets/images/dumbbellturkishgetup.jpg": "2489256183d1dd3becfd54ccf0611f20",
"assets/images/frontsquat.jpg": "0f464212d5c845c6c74367423bb72d03",
"assets/images/hangpowerclean.jpg": "6a8620829f6e2615e46c9e2069383163",
"assets/images/hangpowersnatch.jpg": "6eff22ca0d3d4b376869af0e622100de",
"assets/images/medicineballclean.jpg": "71bba186fd6499d7bc4364b581767605",
"assets/images/overheadsquat.jpg": "3be67a042f50a5432cedc21f6413e2d2",
"assets/images/pushjerk.jpg": "2f48a9038238f20346027888527e1b3d",
"assets/images/pushpress.jpg": "2f33249543f2ecfe39d6fd1ee2baf5c1",
"assets/images/sdhp.jpg": "13634173de476dd5c4e124258e819771",
"assets/images/shoulderpress.jpg": "dd4bc4ac996a3efa5abe2c815ed21989",
"assets/images/snatchbalance.jpg": "ec695d779fa57c4b42f9850b6c470f02",
"assets/images/sotspress.jpg": "8dfebcb77df08301c2dbdd5700ba89e1",
"assets/images/thruster.jpg": "07e27e554c286cbadd72a39fbc9bf2f9",
"assets/images/wwicon.png": "7b78e3b4afe523be408bcd7ed4720812",
"assets/NOTICES": "9cb71db2d525de7e637b41c272f61668",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_material_symbols/lib/fonts/material_symbols_regular.ttf": "0ca3d9dc35a283a5ae7c43e79da8388f",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "1290f263f1e2968c11423785ec859181",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "adb55505542ffd1c2371ed50e7b616a6",
"icons/Icon-512.png": "5fbe4cf39281017e5867fe5875f7ddd9",
"icons/Icon-maskable-192.png": "adb55505542ffd1c2371ed50e7b616a6",
"icons/Icon-maskable-512.png": "5fbe4cf39281017e5867fe5875f7ddd9",
"index.html": "e3602d44857b7a60ab7d21bf0c3b3608",
"/": "e3602d44857b7a60ab7d21bf0c3b3608",
"main.dart.js": "2d62b1e66dde2ef2768014c4b1e6e43a",
"manifest.json": "17b692db86e2cde53713f7a8ccb6c053",
"version.json": "3b283fd457d5504ceae627da4ed30643"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
