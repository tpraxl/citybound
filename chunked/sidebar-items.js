initSidebarItems({"struct":[["ChunkedQueue","A FIFO queue which stores heterogeneously sized items"],["ChunkedVec","A vector which stores items of a known type in a `SizedChunkedArena`"],["MemChunker","Implementation of `Chunker` for temporary heap memory"],["MultiSized","Based on a collection type for fixed-size items (\"Bin\"), creates a collection for heterogenously-sized items which will be stored in the most appropriately-sized bin."],["SizedChunkedArena","A simple array-like collection of fixed-size items of unknown type"],["ValueInChunk","A simple value, stored in a chunk. Typically used to store metadata of collections (such as length) using the same kind of (non-)persistence as the items of the collection"]],"trait":[["Chunker","Describes a strategy for creation and destruction of chunks, adhering to configurable settings"],["SizedChunkedCollection","Any kind of dynamically-growing collection of fixed-size items that uses chunks"]]});