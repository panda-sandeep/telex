const Router = require('./router');
const home = require('./html/index');
const renderArticle = require('./html/post');
const shortid = require('shortid');
const sanitizeHtml = require('sanitize-html');

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
});

/**
 * readRequestBody reads in the incoming request body
 * Use await readRequestBody(..) in an async function to get the string
 * @param {Request} request the incoming request to read from
 */
async function readRequestBody(request) {
    const { headers } = request
    const contentType = headers.get('content-type')
    if (contentType.includes('application/json')) {
      const body = await request.json()
      return body;
    } else if (contentType.includes('application/text')) {
      const body = await request.text()
      return body
    } else if (contentType.includes('text/html')) {
      const body = await request.text()
      return body
    } else if (contentType.includes('form')) {
      const formData = await request.formData()
      let body = {}
      for (let entry of formData.entries()) {
        body[entry[0]] = entry[1]
      }
      return JSON.stringify(body)
    } else {
      let myBlob = await request.blob()
      var objectURL = URL.createObjectURL(myBlob)
      return objectURL
    }
}

/**
 * Sanitizes the keys of data object
 * @param {*} data 
 */
function sanitize(data) {
  const sanitizedData = {};
  const keys = Object.keys(data);
  keys.forEach(key => {
    sanitizedData[key] = data[key] && sanitizeHtml(data[key]);
  });
  return sanitizedData;
}

async function handleRequest(request) {
    const r = new Router();

    r.get('/', () => {
        return new Response(home, { headers: { 'content-type': 'text/html' } })
    });

    r.post('/save', async (req) => {
        const body = await readRequestBody(req);
        const title = body.title, content = body.content, name = body.name;
        if (!title || !content) {
            return new Response("Please provide a title and content", {
                headers: { "Content-Type": "text/html" },
                status: 400,
                statusText: "Forbidden"
              });
        }

        const key = shortid.generate().toLowerCase();

        await articles.put(key, JSON.stringify({ key: key, title: title, name: name, content: content, dateAdded: new Date() }));

        return new Response(JSON.stringify({ key: key }), {
            headers: { "Content-Type": "application/json" },
            status: 200,
            statusText: "OK"
        });
    });

    r.get('/p/.+', async (req) => {
        const url = new URL(req.url).pathname;
        const key = url.substring(url.lastIndexOf('/') + 1).toLowerCase();
        let article = await articles.get(key);

        if (!article) {
            return new Response("Not Found", {
                headers: { "Content-Type": "text/html" },
                status: 404,
                statusText: "Not Found"
            });
        }

        article = sanitize(JSON.parse(article));

        return new Response(renderArticle(article), {
            headers: { "Content-Type": "text/html" },
            status: 200,
            statusText: "OK"
        });
    });

    const resp = await r.route(request);
    return resp;
}
