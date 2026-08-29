# Firefox Extension to remove ai overviews

A small Firefox browser extension that automatically appends `-ai` to Google search queries.

## What it does

When you search for:

```text
best cars for students
```

the extension modifies the Google search query to:

```text
best cars for students -ai
```

So the browser effectively sends Google:

```text
https://www.google.com/search?client=firefox-b-d&q=best+cars+for+students+-ai
```

## How it works

The extension uses Firefox's **WebExtensions API** and **Declarative Net Request (DNR)** system.

## Installation

This extension can currently be loaded as a temporary Firefox add-on.

1. Open Firefox.
2. Navigate to `about:debugging`.
3. Select **This Firefox**.
4. Click **Load Temporary Add-on...**
5. Select the project's `manifest.json`.
6. The extension will be loaded and active.

## Why I built this

I was learning new things and i wanted to work a bit harder to get the information by going through the actual source of information than a ai overvew being shoved into my face. Then i learnt that adding -ai to the end of the searches gets rid of this ai overviews but it was a hassle doing it everytime i searches up something hence why i made this extension.
