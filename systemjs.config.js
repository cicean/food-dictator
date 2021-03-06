(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        'rxjs':                       'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular':                   'node_modules/@angular',
        "typescript":                 "node_modules/typescript/lib/typescript",
        'firebase':                   'node_modules/firebase/firebase.js',
        'angularfire2':               'node_modules/angularfire2'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                           { main: 'app',  defaultExtension: 'ts' },
        'rxjs':                          { defaultExtension: 'js' },
        'angular2-in-memory-web-api':    { defaultExtension: 'js' },
        'angularfire2':                  {defaultExtension: 'js', main: 'angularfire2.js' }

    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        baseUrl: 'app',
        defaultJSExtensions: true,
        transpiler: "typescript",
        typescriptOptions: {
            module: "system",
            sourceMap: true,
            resolveTypings: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            inlineSourceMap: false
        },
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
