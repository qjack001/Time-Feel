self.addEventListener('install', function(e)
{
	e.waitUntil(
		caches.open('Time-Feel').then(function(cache)
		{
			return cache.addAll([
				'https://guinane.xyz/Time-Feel/index.html',
				'https://guinane.xyz/Time-Feel/suncalc.js'
			]);
		})
	);
});

self.addEventListener('fetch', function(event)
{
	console.log(event.request.url);

	event.respondWith(
		caches.match(event.request).then(function(response)
		{
			return response || fetch(event.request);
		})
	);
});