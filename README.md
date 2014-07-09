# get-html-title

Get `<title>` content from HTML string.

## Installation

``` console
npm install get-html-title
```

## Usage

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>title text</title>
</head>
<body>

</body>
</html>
```

Get title content from above html.

```javascript
var content = fs.readFileSync(__dirname + "/fixtures/has-multiple-title.html", "utf-8");
getTitle(content)// => "title text"
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT