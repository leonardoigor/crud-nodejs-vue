"use strict";Object.defineProperty(exports, "__esModule", {value: true}); class QueryBuilder {constructor() { QueryBuilder.prototype.__init.call(this); }
    __init() {this.query = []}

   addStep (step, data) {
    this.query.push({
      [step]: data
    })
    return this
  }

  match (data) {
    return this.addStep('$match', data)
  }

  group (data) {
    return this.addStep('$group', data)
  }

  sort (data) {
    return this.addStep('$sort', data)
  }

  unwind (data) {
    return this.addStep('$unwind', data)
  }

  lookup (data) {
    return this.addStep('$lookup', data)
  }

  project (data) {
    return this.addStep('$project', data)
  }

  build () {
    return this.query
  }
} exports.QueryBuilder = QueryBuilder;
