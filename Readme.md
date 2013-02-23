
# class-transition

Applies a transitive `className` that gets removed upon a CSS
transition completing or a timeout executing as a fallback.

## Example

```js
var transition = require('class-transition');
var el = document.getElementById('subject');
transition(el, 'highlight', '500ms');
```

## API

### transition(class, time)

Applies the given `class`. `time` is passed to the
[ms](http://github.com/guille/ms) component, so it can be `500` or `'500ms'` or `'0.5s'`.

**Note:** if only support for browsers with CSS transitions is needed,
the `time` parameter can be omitted.

## License

MIT
