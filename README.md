# Build Your Own Website

You are going to write a real website today. Not fill in a worksheet, but
actually type the code, starting from an empty file, and publish it on the
internet.

It takes about 90 minutes and you do not need any experience.

## What is in this folder

| File | What it is |
|---|---|
| `index.html` | This is the one you write. It is nearly empty and full of numbered instructions. |
| `style.css` | The appearance of the site. Already written for you. |
| `script.js` | The dark mode button and the scroll animation. Already written for you. |

## How to start

1. Fork this repository using the Fork button at the top right of this page.
2. Open `index.html` in a text editor and in a browser at the same time.
3. Start at STEP 1 and work down. Each step tells you exactly what to build.
4. Save the file and refresh the browser every time you want to see a change.

## The one idea you need

The design is already finished and sitting in `style.css`, waiting for you.

The moment you type this in your HTML:

```html
<div class="card">Pizza</div>
```

you get a box with a border, rounded corners, padding, and an effect when you
hover over it. You did not have to design any of it.

Your job is to know the class names. Here they are.

| Class | What it gives you |
|---|---|
| `nav` | The menu bar that sticks to the top |
| `logo` | Your name inside the nav bar |
| `theme-btn` | The dark mode button |
| `hero` | The large area at the top with your name |
| `eyebrow` | The small label above your name |
| `tagline` | The sentence under your name |
| `wrap` | Keeps content lined up in a neat column |
| `btn` | A filled button |
| `btn btn-ghost` | An outlined button |
| `section` | A chunk of the page with proper spacing |
| `sub` | The short grey line under a heading |
| `grid` | Puts boxes side by side, and stacks them on a phone |
| `card` | A box with a border and a hover effect |
| `card card-wide` | A wider card for a paragraph of writing |
| `tags` and `tag` | Small rounded labels |
| `quote` | The quote block |
| `footer` | The bottom of the page |
| `reveal` | Fades up when you scroll to it. Put it on almost anything. |
| `fade-in` | Fades up when the page loads |
| `delay-1` `delay-2` `delay-3` | Makes a fade-in wait its turn |

Spell them exactly. `card` works. `Card` and `cards` do nothing.

## When something breaks

| What you see | What is wrong |
|---|---|
| The page looks plain and unstyled | A class name is misspelled, or the quotes around it are missing |
| Part of the page vanished | A closing tag is missing, usually a `</div>` |
| Nothing animates and the button does nothing | STEP 10, your `<script>` tag is still commented out |
| A nav link does not jump anywhere | The section is missing its `id`, or the id is spelled differently |
| Nothing changed at all | You did not save the file, or you did not refresh the page |

Breaking your page is a normal part of writing code. Press Ctrl and Z to undo
your last change and try again.

## Put it on the internet

1. In your repository, click **Settings**.
2. Click **Pages** in the left menu.
3. Under Source, choose branch `main` and folder `/ (root)`.
4. Click **Save** and wait about a minute.

Your site will be live at:

```
https://YOUR-USERNAME.github.io/website-template
```

## Want to go further

- Open `style.css` and change `--accent` at the very top. Look for the other
  notes marked TRY CHANGING THIS.
- Add more cards, more interests, or a whole new section by copying one you have
  already written.
- In `script.js`, uncomment the `surprise()` function, then add
  `onclick="surprise()"` to your `<h1>` and click your own name.

## Want to learn about AI instead

There is a complete LLM training template in the
[`llm-training-template/`](llm-training-template/) folder for training your own
small language model in Python. Start with its `GETTING_STARTED.md`.
