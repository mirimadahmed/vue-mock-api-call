let adHtml = ['<p>Loaded ad 1</p>', '<p>Loaded ad 2</p>', '<p>Loaded ad 3</p>', '<p>Loaded ad 4</p>', '<p>Loaded ad 5</p>', '<p>Loaded ad 6</p>'];

export let getAdData = () => new Promise((resolve) => setTimeout(() => resolve(adHtml), 5000));