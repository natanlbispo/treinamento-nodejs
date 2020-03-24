class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception");
  }
}

class ICrurd {
  create(item) {
    throw new NotImplementedException();
  }

  read(query) {
    throw new NotImplementedException();
  }

  update(id, item) {
    throw new NotImplementedException();
  }

  delete(id) {
    throw new NotImplementedException();
  }
}

class MongoDB extends ICrod{

}

class ContextStrategy {
   (strategy) {
    this._database = strategy;
  }

  create(item) {
    return this._database.create(item);
  }

  read(item){
      return this._database.read(item);
  }

  update(id, item){
    return this._database.update(id, item);
  }

  delete(id){
    return this._database.dele(id);
  }

}
