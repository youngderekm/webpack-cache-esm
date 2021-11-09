Reproducible case of issues when using `cache: "filesystem"` in a webpack configuration file that
is an es module (webpack.config.mjs).

To reproduce the issue:

```
npm install
npm run build
```

You should see log lines:

```
> webpack-cache-esm@1.0.0 build
> webpack

    [webpack.cache.PackFileCacheStrategy] No pack exists at C:\sand\webpack-cache-esm\node_modules\.cache\webpack\default-production.pack: Error: ENOENT: no such file or directory, stat 'C:\sand\webpack-cache-esm\node_modules\.cache\webpack\default-production\index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 25.3855 ms
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|dependencyType=|esm|path=|C:\sand\webpack-cache-esm|request=|./src
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (C:\sand\webpack-cache-esm\webpack.config.mjs, C:\sand\webpack-cache-esm\node_modules\webpack\lib\)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Parsing of C:\sand\webpack-cache-esm\webpack.config.mjs<w> Build dependencies behind this expression are ignored and might cause incorrect cache invalidation.
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo]  at file dependencies C:\sand\webpack-cache-esm\webpack.config.mjs
     at file C:\sand\webpack-cache-esm\webpack.config.mjs
     at resolve commonjs C:\sand\webpack-cache-esm\webpack.config.mjs
        at JSON.parse (<anonymous>)
        at C:\sand\webpack-cache-esm\node_modules\webpack\lib\FileSystemInfo.js:1660:32
        at C:\sand\webpack-cache-esm\node_modules\graceful-fs\graceful-fs.js:123:16
        at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 28.8327 ms
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Can't resolve 'module' in 'C:\sand\webpack-cache-esm'
<w> while resolving 'module' in C:\sand\webpack-cache-esm as file
<w>  at resolve esm file module
<w>  at file dependencies C:\sand\webpack-cache-esm\webpack.config.mjs
<w>  at file C:\sand\webpack-cache-esm\webpack.config.mjs
<w>  at resolve commonjs C:\sand\webpack-cache-esm\webpack.config.mjs
    [webpack.cache.PackFileCacheStrategy] Error: Can't resolve 'module' in 'C:\sand\webpack-cache-esm'
    while resolving 'module' in C:\sand\webpack-cache-esm as file
     at resolve esm file module
     at file dependencies C:\sand\webpack-cache-esm\webpack.config.mjs
     at file C:\sand\webpack-cache-esm\webpack.config.mjs
     at resolve commonjs C:\sand\webpack-cache-esm\webpack.config.mjs
        at finishWithoutResolve (C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\Resolver.js:293:18)
        at C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\Resolver.js:362:15
        at C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\Resolver.js:410:5
        at eval (eval at create (C:\sand\webpack-cache-esm\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:15:1)
        at C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\Resolver.js:410:5
        at eval (eval at create (C:\sand\webpack-cache-esm\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:27:1)
        at C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\DescriptionFilePlugin.js:87:43
        at C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\Resolver.js:410:5
        at eval (eval at create (C:\sand\webpack-cache-esm\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:15:1)
        at C:\sand\webpack-cache-esm\node_modules\enhanced-resolve\lib\Resolver.js:410:5
asset main.js 69.5 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1010 bytes 5 modules
cacheable modules 532 KiB
  ./src/index.js 311 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
```

Remove the cache between runs:

```
rm -rf node_modules/.cache
```

If you comment out the cache configuration in webpack.config.mjs, then run "npm run build",
you'll see that it runs cleanly with no warnings.
