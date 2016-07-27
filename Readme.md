
# class-transition

Applies a transitive `className` that gets removed upon a CSS
transition completing or a timeout executing as a fallback.

## Example

```js
var transition = require('class-transition');
var el = document.getElementById('subject');
transition(el, 'highlight', '500ms', function() {
  console.log('transition finished');
});
```

## API

### transition(el, class, [time], [fn])

Applies the given `class` to `el` for a given `time`.
If no `time` is given, the class will be removed when
the transition completes.

`time` is passed to the
[ms](http://github.com/guille/ms) component, so it can be `500` or `'500ms'` or `'0.5s'`.

You may also pass an optional `fn` to be notified
when the transition finishes.

## Test

Run `nsp check --output summary` to check for CVEs if you are changing the package dependencies.

## License

MIT
