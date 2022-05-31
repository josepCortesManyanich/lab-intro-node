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
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else Math.min(...this.items)
  }

  sum() {
    let totalItems = 0
    for (let i= 0; i < this.items.length; i++)
    if ( this.items[i] > 0){
     return totalItems = 0 + this.items[i]
    } 
     
  }

  avg() {
    
    let averageItems = 0
    for (let i=0; i < this.items.length; i++)
    if (this.items[i] > 0){
      return averageItems = this.items[i]/ this.items.length
    }
    
  }
}

module.exports = SortedList;
