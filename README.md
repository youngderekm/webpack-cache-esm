Reproducible case of issues when using `cache: "filesystem"` in a webpack configuration file that
is an es module (webpack.config.mjs).

To reproduce the issue:

```
cd project
npm install
npm run build
```

You should see log lines:

```
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Can't resolve 'module' in 'C:\sand\webpack-cache-esm\project'
<w> while resolving 'module' in C:\sand\webpack-cache-esm\project as file
<w>  at resolve esm file module
<w>  at file dependencies C:\sand\webpack-cache-esm\project\webpack.config.mjs
<w>  at file C:\sand\webpack-cache-esm\project\webpack.config.mjs
<w>  at resolve commonjs C:\sand\webpack-cache-esm\project\webpack.config.mjs
    [webpack.cache.PackFileCacheStrategy] Error: Can't resolve 'module' in 'C:\sand\webpack-cache-esm\project'
    while resolving 'module' in C:\sand\webpack-cache-esm\project as file
     at resolve esm file module
     at resolve commonjs C:\sand\webpack-cache-esm\project\webpack.config.mjs
        at C:\sand\webpack-cache-esm\project\node_modules\enhanced-resolve\lib\Resolver.js:362:15
        at eval (eval at create (C:\sand\webpack-cache-esm\project\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:15:1)
        at C:\sand\webpack-cache-esm\project\node_modules\enhanced-resolve\lib\Resolver.js:410:5
        at eval (eval at create (C:\sand\webpack-cache-esm\project\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:27:1)
        at C:\sand\webpack-cache-esm\project\node_modules\enhanced-resolve\lib\DescriptionFilePlugin.js:87:43
        at C:\sand\webpack-cache-esm\project\node_modules\enhanced-resolve\lib\Resolver.js:410:5
        at eval (eval at create (C:\sand\webpack-cache-esm\project\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:15:1)
        at C:\sand\webpack-cache-esm\project\node_modules\enhanced-resolve\lib\Resolver.js:410:5
```

```
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Parsing of C:\sand\webpack-cache-esm\project\webpack.config.mjs for build dependencies failed at 'import(path)'.
<w> Build dependencies behind this expression are ignored and might cause incorrect cache invalidation.
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo]  at file dependencies C:\sand\webpack-cache-esm\project\webpack.config.mjs
     at file C:\sand\webpack-cache-esm\project\webpack.config.mjs
     at resolve commonjs C:\sand\webpack-cache-esm\project\webpack.config.mjs
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] SyntaxError: Unexpected token ' in JSON at position 0
        at JSON.parse (<anonymous>)
        at C:\sand\webpack-cache-esm\project\node_modules\webpack\lib\FileSystemInfo.js:1660:32
        at C:\sand\webpack-cache-esm\project\node_modules\graceful-fs\graceful-fs.js:123:16
        at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)
```

Remove the cache between runs:

```
rm -rf node_modules/.cache
```

If you comment out the cache configuration in project/webpack.config.mjs, then run "npm run build",
you'll see that it runs cleanly with no warnings.
