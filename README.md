# About project
This project will visualize Tree from input user based on indent
## `What did I do ??`
- Build function **parserTree** : func has one param , func will parser input from user and convert it object root , and inside object root will be list child node , and similarly inside child nodes there will be other child nodes
- **Example input**
```
root 
  child1
    grandChild1
      grandChild3
      grandChild4
    grandChild2
    grandChild3
  child2
  child3
  child4
    grandChild4
      grandChild5
```
- **Ouptut of parserTree func**
```js
{
  "name": "root",
  "children": [
    {
      "name": "child1",
      "children": [
        {
          "name": "grandChild1",
          "children": [
            {
              "name": "grandChild3",
              "children": []
            },
            {
              "name": "grandChild4",
              "children": []
            }
          ]
        },
        {
          "name": "grandChild2",
          "children": []
        },
        {
          "name": "grandChild3",
          "children": []
        }
      ]
    },
    {
      "name": "child2",
      "children": []
    },
    {
      "name": "child3",
      "children": []
    },
    {
      "name": "child4",
      "children": [
        {
          "name": "grandChild4",
          "children": [
            {
              "name": "grandChild5",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
```
- customHook **useCenterTree** : This hook helps center tree on the initial load
## Some UI preview
![image](https://github.com/HoaLe69/tree-visualizer-interview/assets/110876986/1f8dba16-6ee9-42e0-a4db-4ba3793501b2)
- when input invalid
![image](https://github.com/HoaLe69/tree-visualizer-interview/assets/110876986/0db9c599-aa19-4eab-ae6d-f2f7bb6d4646)
![image](https://github.com/HoaLe69/tree-visualizer-interview/assets/110876986/7262075f-b484-4d4d-b756-5c102141a755)


