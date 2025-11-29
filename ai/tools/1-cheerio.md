## 🎯 **Best Resources for Cheerio Selector Examples**

### **1. Comprehensive Cheat Sheets with Examples**

**ProxiesAPI - The Ultimate Cheerio Web Scraping Cheat Sheet**

- Link: https://proxiesapi.com/articles/the-ultimate-cheerio-web-scraping-cheat-sheet
- Covers IDs, classes, attributes, DOM traversal, DOM manipulation, looping, output, caching, and best practices with real-world examples
- Perfect quick reference with code snippets

**PixelJets - Cheerio Playground and Cheatsheet**

- Link: https://pixeljets.com/blog/cheerio-sandbox-cheatsheet/
- Shows how to use the :contains selector for dynamic CSS classes, data-test-id attributes, and the :not pseudo-class with attribute selectors
- Great for handling tricky HTML with dynamic classes

---

### **2. Official Cheerio Documentation (Best for Deep Learning)**

**Cheerio Selecting Elements Guide**

- Link: https://cheerio.js.org/docs/basics/selecting
- Covers combining selectors to match multiple criteria, using spaces for descendant selection, and the > character for direct child selection
- Official reference for all supported CSS selectors

**Cheerio Traversing the DOM Guide**

- Link: https://cheerio.js.org/docs/basics/traversing
- Demonstrates find, children, parents, parentsUntil, closest, nextAll, prevAll, siblings, nextUntil, and prevUntil methods with examples
- Essential for navigating complex HTML structures

---

### **3. Practical Tutorial with Varied Examples**

**ZetCode - Cheerio Tutorial**

- Link: https://zetcode.com/javascript/cheerio/
- Includes examples of parent elements, first/last elements, filtering with the \* selector, appending elements, and after insertion
- Step-by-step examples from basic to advanced

**WebScraping.AI - How to Select Elements Using Cheerio**

- Link: https://webscraping.ai/faq/cheerio/how-do-you-select-elements-using-cheerio
- Shows selecting by tag name, ID, class, attribute, direct child selector, table scraping, multiple conditions, and filter methods
- Excellent real-world scraping examples

---

### **4. Advanced Selector Techniques**

**cheerio-select GitHub Repository**

- Link: https://github.com/cheeriojs/cheerio-select
- Documents jQuery positional selectors including :first, :last, :eq(index), :nth(index), :gt(index), :lt(index), :even, and :odd
- Perfect for advanced filtering and positioning

---

## 💎 **Quick Selector Reference (Most Useful Examples)**

Here's a quick reference of the most useful selectors you'll need:

```javascript
// Basic Selectors
$("div"); // All divs
$("#id"); // By ID
$(".class"); // By class
$("div.class"); // Div with class
$("[data-id]"); // Has attribute
$('[data-id="123"]'); // Attribute equals value

// Relationship Selectors
$("div > p"); // Direct children
$("div p"); // All descendants
$("div + p"); // Next sibling
$("div ~ p"); // All following siblings

// Advanced Selectors
$('div:contains("text")'); // Contains text (super useful!)
$("div:not(.class)"); // Negation
$("div[class]"); // Has class attribute
$("div:has(p)"); // Contains element
$("li:first"); // First element
$("li:last"); // Last element
$("li:eq(2)"); // Element at index
$("li:gt(1)"); // Index greater than
$("li:lt(3)"); // Index less than

// Multiple Selectors
$(".class1, .class2"); // Either class

// Attribute Selectors
$('[href^="https"]'); // Starts with
$('[href$=".pdf"]'); // Ends with
$('[href*="book"]'); // Contains
```

---

## 🔥 **Pro Tips from the Resources**

1. Use :contains selector for websites with dynamic CSS classes - it's a great approach when class names change

2. Use data-test-id or custom data attributes for more stable selectors, especially when class names are dynamic

3. For better performance, use selector syntax like :first instead of the .first() method when possible

---

## 📚 **Recommended Learning Order**

1. **Start here**: ProxiesAPI Cheat Sheet (30 mins)
2. **Then**: Official Cheerio Selecting Guide (1 hour)
3. **Practice with**: ZetCode Tutorial examples (2 hours)
4. **Master**: Official Traversing Guide (1 hour)
5. **Advanced**: cheerio-select for jQuery positionals (30 mins)

---

The **ProxiesAPI cheat sheet** and **PixelJets playground guide** are probably the most practical starting points since they focus on real-world scraping scenarios with tons of copy-paste examples!

Would you like me to create a comprehensive selector examples artifact specifically tailored for scraping book content from al-islam.org?
