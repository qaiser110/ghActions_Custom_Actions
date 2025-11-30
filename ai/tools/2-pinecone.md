### **2. Vector Databases (Pinecone/Chroma)**

**Video Tutorials:**

- **DataCamp's Mastering Vector Databases with Pinecone Tutorial** - A comprehensive guide covering high-dimensional data handling and vector embeddings for AI applications

[Video Tutorial](https://campus.datacamp.com/courses/vector-databases-for-embeddings-with-pinecone/introduction-to-pinecone?ex=1)

- **ProjectPro's Pinecone Vector Database Tutorial** - Covers setup, features, and architecture with a practical movie recommendation system example

- **Simple Guide to Using Pinecone Vector Database** - A straightforward tutorial showing how to set up Pinecone, create an index, and use LangChain for document embeddings

**Additional Resources:**

- Pinecone Learning Hub: https://www.pinecone.io/learn/
- DataCamp Course: "Vector Databases for Embeddings with Pinecone"

---

[pinecone.io - Get your API key](app.pinecone.io/organizations/-OfCMrMYMrM0u-qcEJao/projects/da77ba12-1345-402c-8a43-c9d18ca68fa3/indexes)

curl -o CLAUDE.md https://docs.pinecone.io/AGENTS-PYTHON.md

Open Claude Code (claude) and ask Claude to summarize Pinecone best practices:

Confirm you can see the CLAUDE.md file and understand Pinecone best practices.

```python
from pinecone import Pinecone, ServerlessSpec

pc = Pinecone(api_key="xxxxx")

pc.create_index(
    name="datacamp-index",
    dimension=1536,
    spec=ServerlessSpec(
      cloud="aws",
      region="us-west-1",
    ),
)

pc.list_indexes()

# Add to Index
pc.Index('datacamp-index')

# Delete Index
pc.delete_index('datacamp-index')

# info about the number of vectors in the index,
# the proportion of the index that is full
# the fullness and the dimensionality of the index
pc.describe_index_stats()
```

## Checking dimensionality

To check dimensionality, we create a list comprehension that checks if the length
of the list located under the 'values' key is 1536 for each vector in vectors.
To check that this condition is true for every vector,
we can call the all() function on the list.
Since this is true, we can be sure that these vectors are safe to ingest.

```python
vector_dims = [len(vector['values']) == 1536 for vector in vectors]
all(vector_dims)
```

## Upsert

For ingesting vectors, Upsert is a combination of update and insert. If we try to ingest a vector ID already present in the index, it will update with new data, otherwise inserted. We call .upsert(), pass it the vectors.

```python
vectors = [
  {
    "id": "0",
    "values": [0.025525547564029694, ..., 0.0188823901116848],
    "metadata": {"genre": "productivity", "year": 2020}
  }
]

index.upsert(
  vectors=vectors
)

index.describe_index_stats()
```

To check that the vectors were successfully upserted, we can call the describe_index_stats() method. We can see all 10 vectors were inserted. The index_fullness is still zero, as 10 is a tiny fraction of the index's maximum capacity. Note that it can take a few moments for this data to refresh, so describe_index_stats() may not immediately show the updated statistics.
