# react-Back-To-Top
a customizable back-to-top component for react


## Install

```
npm i react-back-to-top
```

or

```
yarn add react-back-to-top
```


## Use

First import into the project:

```
import BackToTop from 'react-back-to-top';
```
Used is JSX:

```
<BackToTop
    mainStyle={{
        width:'100%',
        height:'100%',
        background:'url(...)'
    }}
    percentStyle={{
        width:'100%',
        height:'100%',
    }}
    animate='rotate'
    offsetTop={20}
    step={50}
    percent={true}
    visiblePercent={50}
  />
```

## Custom animation
If you do not like the preset animation,you can customize the animation like this:

```
your css:

.c-animate-hide{
   transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  -webkit-transition: all 1s;
  transform: translateY(100%)
}
.c-animate-show{
   transition: all 1s;
  -moz-transition: all 1s;
  -o-transition: all 1s;
  -webkit-transition: all 1s;
  transform: translateY(0)
}
```
Under these two class names, you can use transitions or other transitional animations to achieve your favorite effects


## API
Parameter | Explain|Type|default
---|---|---|---
offsetTop | Back to the position of a specified number of pixels from the top|number|0
step | The distance each time you move. Used to control the speed of movement.The larger the value the faster|number|50
isPercent|Whether to display the current content as a percentage of all content (excluding offsetTop)|Boolean|true
visiblePercent|Less than this percentage does not show percent.Valid when 'isPercent' is true|number|1
animate|Animation when 'Percent' showing or hiding|'fade','rotate','none'|'fade'
mainStyle|Custom component style,You can replace any picture|style object|{}
percentStyle|Custom 'Percent'component style|style object|{}

