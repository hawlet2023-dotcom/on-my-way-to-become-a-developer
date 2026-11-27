### 📚 The Theory of RAG (Retrieval-Augmented Generation)

## 🚀 Teaching the AI New Tricks

## 📖 Overview

Retrieval-Augmented Generation (RAG) is a technique that allows Large Language Models (LLMs) to answer questions using external information retrieved from documents, databases, and other knowledge sources.

A normal LLM mainly relies on its training data and the information provided in the current prompt. RAG improves this by searching for relevant information first and providing it to the AI before generating an answer.

Main idea: Instead of expecting AI to memorize everything, we give it the right information at the right time.

---

## 🎯 Learning Objectives

By studying this topic, you will understand:

- What RAG is and why it is needed.
- The limitations of traditional LLMs.
- The difference between RAG and Fine-Tuning.
- The core concepts behind RAG.
- How the RAG architecture works.
- How embeddings represent the meaning of text.
- How semantic search retrieves relevant information.
- How RAG reduces hallucinations.

---

1. The Problem: Limitations of Traditional LLMs

Traditional LLMs have several limitations:

1. Knowledge Cutoff

An LLM does not automatically know new information created after its training period.

2. Private Data

An LLM cannot automatically access private company documents, internal schedules, policies, or databases.

3. Hallucination

Hallucination occurs when AI generates an answer that sounds correct but is not supported by actual information.

The Old Solution: Fine-Tuning

Fine-tuning means training an existing model further using additional examples.

- Fine-tuning is better for changing behavior, tone, style, and output format.
- RAG is better for accessing changing facts, private documents, schedules, prices, FAQs, and policies.

---

2. What Is RAG?

RAG stands for Retrieval-Augmented Generation.

It combines three main processes:

Component| Meaning
Retrieval| Searching for relevant information.
Augmented| Adding retrieved information to the prompt.
Generation| Using the LLM to generate the final answer.

RAG allows AI to use external knowledge without permanently memorizing the information.

---

3. Core Concepts of RAG

A. Context Window

The context window is the maximum amount of information an LLM can process in one request.

It includes:

- System instructions.
- User questions.
- Retrieved information.
- Previous conversation messages.

B. Context Stuffing

Context stuffing means inserting retrieved information directly into the prompt sent to the LLM.

C. Hallucination Prevention

The system uses instructions to prevent AI from guessing when the retrieved information does not contain an answer.

Example:

"If the answer is not found in the provided context, say: I do not know based on the provided information."

---

4. RAG Architecture: The Complete Pipeline

The RAG architecture consists of six major steps:

Ingestion → Chunking → Embedding → Storage → Retrieval → Generation

Step 1: Ingestion (Loading Data)

Ingestion means bringing information into the system.

Data sources can include:

- PDF files.
- Word documents.
- Text files.
- Website pages.
- Internal manuals.
- FAQs.
- Database records.

Metadata such as file name, section title, date, and source type can also be stored.

Step 2: Chunking (Splitting Text)

Chunking means dividing large documents into smaller pieces called chunks.

Good chunking:

- Keeps complete ideas together.
- Uses overlap between chunks.
- Uses meaningful paragraph and heading boundaries.
- Avoids chunks that are too large.

Recursive Chunking:

1. Split by sections or headings.
2. If necessary, split by paragraphs.
3. If necessary, split by sentences.
4. If necessary, split by characters.

Chunk Overlap: Repeating a small part of the previous chunk in the next chunk to preserve meaning and context.

Step 3: Embedding (Converting Text into Vectors)

An embedding is a list of numbers that represents the meaning of text.

Example:

Text:
"The Full Stack class price is $1000."

Embedding:
"[0.13, -0.44, 0.82, 0.06, ...]"