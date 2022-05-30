class SortedList {
  constructor(items,length) {
     this.items = [];
     this.length = this.items.length
  }

  add(item) {
     const newItemsArray = this.items.push(item)
    this.items.sort((a,b) => {
       a - b
    })
    return newItemsArray
  }

  get(pos) {
    if (pos <= this.items.lenght){
      this.items[pos]
    } else throw new Error('OutOfBounds');
  }

  max() {
    
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
