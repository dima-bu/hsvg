## hsvg
Angular directive for work with svg sprites

[Demo page] (http://dima-bu.github.io/hsvg-example/index.html)


### how it use


For run grunt we should set it global
```
npm install -g grunt-cli
```

Then get npm packets
```
npm install
```

We add svg icons to /svg folder and when we run

 ```
 grunt

```
We create ./html-parts/sprite.html file with svg sprite, after that we complite html from parts


We have directive hsvg - [hsvg.js](./js/hsvg.js)

```
<hsvg hsvghref="airport" class="lg-size airport-icon"></hsvg>
```

#### hsvghref
    -- name of svg file in ./svg folder

#### class
    -- css class, we can add fill property for add bg color of icon

``` css

.lg-size {
    width: 50px;
    height : 50px;
}

.airport-icon {
    fill: gray;
}

```