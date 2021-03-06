const SignatureConstants = (() => {
  const blankCanvas = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAABX0lEQVR4Xu3TQREAAAiEQK9/aWvsAxMw4O06wsAIiiCuEMgTFKIQiAEEo0UUAjGAYLSIQiAGEIwWUQjEAILRIgqBGEAwWkQhEAMIRosoBGIAwWgRhUAMIBgtohCIAQSjRRQCMYBgtIhCIAYQjBZRCMQAgtEiCoEYQDBaRCEQAwhGiygEYgDBaBGFQAwgGC2iEIgBBKNFFAIxgGC0iEIgBhCMFlEIxACC0SIKgRhAMFpEIRADCEaLKARiAMFoEYVADCAYLaIQiAEEo0UUAjGAYLSIQiAGEIwWUQjEAILRIgqBGEAwWkQhEAMIRosoBGIAwWgRhUAMIBgtohCIAQSjRRQCMYBgtIhCIAYQjBZRCMQAgtEiCoEYQDBaRCEQAwhGiygEYgDBaBGFQAwgGC2iEIgBBKNFFAIxgGC0iEIgBhCMFlEIxACC0SIKgRhAMFpEIRADCEaLKARiAMFoEUiIB68wAGNX+81UAAAAAElFTkSuQmCC';
  const line = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAACGUlEQVR4Xu3b0W7DIAxGYfr+D71pqqq1W1ogwea3fXqNRORPB3KR3lprX621W+O3dQIPADC2MryWAMZGjL9HEhibMI7uBjA2YLy7pMFwxvj0tgSGI0bvtRUMJ4wexM9jgOGAMQIBhhAEGMYYo0U8HoNjyghkFoIyhCDAMMA4UwTHlBgEZSwEuVIEZYhBUMYCkBVFUIYYBGVcAFlZBGWIQVDGCRCLIihDDIIyJkAsi6AMMQjKGADxKIIyxCAo4wOIZxGUIQZBGQcgO4qgDDEIyngC2VkEZYhBUIbYP4VKf6qjcDQ9X11lMdQgyh5TihAlMVQhymEoQ5TCUIcogxEBogRGFIj0GJEgUmNEg0iLEREiJUZUiHQYkSFSYUSHSIORASIFRhaI8BiZIEJjZIMIi5ERIiRGVohwGJkhQmFkhwiDUQEiBEYVCHmMShDSGNUgZDEqQkhiVIWQw6gMIYVRHUIGA4j7t+jbv0IH4g6xHQOIX4itGEC8QmzDAOI/xBYMII4h3DGAeA/higHEZwg3DCD6EC4YQIxBmGMAMQ5higHEHIQZBhDzECYYQJyDWI4BxHmIpRhAXINYhgHEdYglGECsgbiMAcQ6iEsYQKyFOI0BxHqIUxhA2EBMYwBhBzGFAYQtxDAGEPYQQxhA+EB0dwGiOyKfBUD4zLm7CxDdEfksAMJnzt1dgOiOyGcBED5z7u4CRHdEPgu+ASZGWmPw2JpLAAAAAElFTkSuQmCC';

  return { blankCanvas, line };
})();

module.exports = SignatureConstants;
