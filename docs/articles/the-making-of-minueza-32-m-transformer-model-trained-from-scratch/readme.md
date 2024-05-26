# The making of Minueza-32M: Transformer model trained from scratch

This is a long story! To save us time, I’ll write about it as a timeline, shall we?

- It all started with MiniSearch. ([What’s MiniSearch?](https://www.linkedin.com/pulse/introducing-minisearch-minimalist-search-engine-ai-victor-nogueira/))
- I’ve looked for and found really good small models to run using [Transformers.js](https://xenova.github.io/transformers.js) since [WebLLM](https://webllm.mlc.ai/) depends on WebGPU, which in turn is not yet available on all browsers.
- I’ve learned that models with more than 500 million parameters ("500M", for short) were not performing well on the browser, as the inference time was too high when using [ONNX](https://onnxruntime.ai/) models with Transformers.js.
- So the best model I found with less than 500M was [LaMini-Flan-T5-248M](https://huggingface.co/MBZUAI/LaMini-Flan-T5-248M), and since then, this 248M model became my ideal model. However, it was an _encoder-decoder_ model, which has some disadvantages compared to _decoder-only_ models, for my use case.
- I then [started fine-tuning decoder-only models myself](https://huggingface.co/collections/Felladrin/trained-models-65855d99bae0736365afd2ef), aiming to get one that had the same level as LaMini’s. My first contact with model training was via [AutoTrain](https://huggingface.co/docs/autotrain), training models with a GUI directly on HuggingFace spaces.
- At some point, I had success with one of my fine-tunes ([TinyMistral-248M-SFT](https://huggingface.co/Felladrin/TinyMistral-248M-SFT-v4)), which quickly raised some stars, and inspired me to continue trying and also to find better alternatives to AutoTrain, because I found out that the HuggingFace Space can die and you won’t be able to recover not even a small part of the model that was trained there.
- So I started trying to fine-tune models on my machine. Found a lot of frameworks, but in the end, I thought it would be better to learn from the source: the Transformers library, which has everything needed to create models for the HuggingFace inference platform.
- I took a deep dive into the [Transformers documentation](https://huggingface.co/docs/transformers) and explored their [repository](https://github.com/huggingface/transformers).
- Since then I started fine-tuning even smaller models using the [Supervised Fine-tuning Trainer](https://huggingface.co/docs/trl/main/en/sft_trainer). And the smallest one was a model of 31M ([Pythia-31M-Chat](https://huggingface.co/Felladrin/Pythia-31M-Chat-v1)).
- From this last one I realized there could be a chance that a model with _8 times fewer_ parameters could replace _LaMini-Flan-T5-248M_ in _MiniSearch_.
- That was the moment when I started getting curious about the process of training a model from scratch. Would it be possible to create a model that would be directed to MiniSearch requirements, but still be useful for other tasks? 🤔
- On the Transformers repository I found some good usage examples, including a [command line for training a model from scratch with custom configuration](https://github.com/huggingface/transformers/tree/c8d98405a8f7b0e5d07391b671dcc61bb9d7bad5/examples/pytorch/language-modeling#creating-a-model-on-the-fly) (layers, heads, context window, etc.).
- By the way, all those machine learning terms were new to me and I had to learn by demand, so this article might have some misconceptions. If you see any, please leave a comment, so I can update the article.
- With the command line from Transformers, I created several prototypes and reached a combination of layers/heads/intermediate-size that would fit in around 30M.
- When I finally made my first pre-trained model, I discovered that a model with 2 hidden layers wouldn’t be complex enough for MiniSearch. So I discarded it 🚮.
- Made my second pre-trained and discovered that a model can suffer from underfitting (not trained with enough tokens) and also from exploding gradients (which makes it hard to fine-tune a model). So, 🚮.
- Finally, on my third pre-trained, I got it right. I’ve read somewhere that if you reach the point of “overfitting” during the pretraining, it’s a sign that you’re on the right path in the model creation.
- After reaching the overfitting state (when the model starts memorizing the training dataset instead of generalizing it), all I had to do it feed it with different data (to increase token linking variety) and possibly tweak the learning rate and batch size (but I didn’t). I’ve added other datasets and learned about the advantages of interleaving them. The problem with the overfitting was resolved.

```
[Pretraining Info]
Leaning Rate (LR) of 5e-5, in batches of 8, with a context window of 2048 tokens (8 * 2048 = 16384 tokens taken into account on each batch).
```

- I finally had a good base model in my hands, and it was now time to confirm if it was true by creating a fine-tuned model from it. I've heard that if it’s easy to fine-tune a base model with a dataset of ~10k examples, then it’s a good base model.
- I had already several instruct/chat datasets converted to ChatML (and [shared on HF](https://huggingface.co/Felladrin?search_datasets=ChatML)), so I didn’t need to do any mapping in my training script.
- I then interleaved all the datasets I wanted and started the [supervised fine-tuning](https://huggingface.co/docs/trl/main/en/sft_trainer) (SFT). After the model was good enough (properly responding to prompts I use on MiniSearch), I finished the SFT and started the [direct preference optimization](https://huggingface.co/docs/trl/main/en/dpo_trainer) (DPO).
- The model wasn’t good at first, so I had to run a few more rounds of SFT and DPO training.

```
[Training Info]
The SFT was made with LR 2e-5, trained in batches of 24 (24 * 2048 = 49152 tokens per batch).
The DPO fine-tuning was with LR 7.5e-7, trained in batches of 6 (6 * 2048 = 12288 tokens per batch), using max_steps=200 and repeating several times with shuffled interleaved DPO datasets.
```

- Finally, with the models ready, it’s time to let them free!
- [⛳️ Minueza-32M-Base](https://huggingface.co/Felladrin/Minueza-32M-Base)
- [💬 Minueza-32M-Chat](https://huggingface.co/Felladrin/Minueza-32M-Chat)
- I appreciate your interest and thank you for reading it!<|story_end|>
