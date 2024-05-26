# Introducing MiniSearch - A minimalist search engine with integrated browser-based AI

I'm excited to announce the release of my last project, MiniSearch.

I admire Perplexity.ai, Phind.com, You.com, Bing, Bard and all these search engines integrated with AI chatbots. And as a curious developer, I took the chance and created my own version.

Using [Web-LLM](https://webllm.mlc.ai/) and [Transformers.js](https://huggingface.co/docs/transformers.js) to provide browser-based text-generation models on desktop and mobile, I built a minimalist self-hosted search app on which an AI analyses the results, comments on them and responds to your query summarising the info. In the backend, it still queries a real search engine, but besides that, there's no other remote connection happening.

For running in the browser and on mobiles, lightweight models are required, so we can't expect them to give stellar answers, but there are a few advantages of using this over the services as mentioned earlier:

- Availability: The AI will always be available and respond with the maximum available speed from the device.
- Privacy: Besides the queries that go anonymously to the actual search engine, nothing else leaves your device.
- No ads/trackers: Get the relevant links clean and fast without being tracked.
- Customization: As it's open-source, you can fork it and re-style it any way you want.

You can get started with MiniSearch by [cloning the repository from GitHub](https://github.com/felladrin/MiniSearch) and running it locally or by using it online on [this HuggingFace Space](https://felladrin-minisearch.hf.space/).

You can even [set it as your browser's address-bar search engine](https://support.google.com/chrome/answer/95426?hl=en&co=GENIE.Platform%3DDesktop) using the query pattern https://felladrin-minisearch.hf.space/?q=%s.

At the moment of this writing, the app is using TinyLlama and LaMini-Flan-T5 models, but there's an option to try to use larger models like Mistral (not recommended, though, as it could be slow and break the fast-search experience).

That's what I had to share. Thanks for reading! And your feedback means the world to me! Please don't hesitate to reach out if you have any questions or suggestions or want to learn more.
