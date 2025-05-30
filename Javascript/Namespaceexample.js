// Sample XML as a string
const xmlString = `
<bookstore xmlns:bk="http://example.com/book">
  <bk:book>
    <bk:title>JavaScript Basics</bk:title>
    <bk:author>Jane Doe</bk:author>
  </bk:book>
   <bk:book>
    <bk:title>JavaScript Advanced</bk:title>
    <bk:author>Jane Doe</bk:author>
  </bk:book>
   <bk:book>
    <bk:title>JavaScript ES6</bk:title>
    <bk:author>Jane Doe</bk:author>
  </bk:book>
</bookstore>
`;

// Parse XML string into a DOM object
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Namespace URI used in the XML
const namespaceURI = "http://example.com/book";

// Get all <bk:title> elements
const titles = xmlDoc.getElementsByTagNameNS(namespaceURI, "title");

// Access and log the content
for (let i = 0; i < titles.length; i++) {
  console.log(titles[i].textContent);
}