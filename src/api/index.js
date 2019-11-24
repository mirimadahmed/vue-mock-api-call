let adHtml = ['<p>Loaded ad 1</p>', '<p>Loaded ad 2</p>', '<p>Loaded ad 3</p>'];

export let getAdData = () => new Promise((resolve) => setTimeout(() => resolve(adHtml), 5000));