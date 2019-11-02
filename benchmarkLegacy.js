const init = new Benchmark.Suite

options.init = true

if (options.init){
  const holder = [ 1, 2, 3, 4 ]

  init.add('Rambda.init', () => {
    R.init(holder)
  })
    .add('Ramda', () => {
      Ramda.init(holder)
    })
    .add('Lodash', () => {
      _.initial(holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const initString = new Benchmark.Suite

options.initString = true

if (options.initString){
  const holder = 'foo'

  initString.add('Rambda.init when string', () => {
    R.init(holder)
  })
    .add('Ramda', () => {
      Ramda.init(holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const last = new Benchmark.Suite

options.last = true

if (options.last){
  const holder = [ 1, 2, 3, 4 ]

  last.add('Rambda.last', () => {
    R.last(holder)
  })
    .add('Ramda', () => {
      Ramda.last(holder)
    })
    .add('Lodash', () => {
      _.last(holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const match = new Benchmark.Suite

options.match = true

if (options.match){
  match.add('Rambda.match', () => {
    R.match(/a./g)('foo bar baz')
  })
    .add('Ramda', () => {
      Ramda.match(/a./g)('foo bar baz')
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const merge = new Benchmark.Suite

options.merge = true

if (options.merge){
  const holder = { bar : 'yes' }
  const a = {
    foo : 'bar',
    bar : 'baz',
  }

  merge.add('Rambda.merge', () => {
    R.merge(a, holder)
  })
    .add('Ramda', () => {
      Ramda.merge(a, holder)
    })
    .add('Lodash', () => {
      _.merge(a, holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const omit = new Benchmark.Suite

options.omit = true

if (options.omit){
  const holder = {
    a : 'foo',
    b : 'bar',
    c : 'baz',
  }
  const a = [ 'a', 'c' ]

  omit.add('Rambda.omit', () => {
    R.omit(a, holder)
  })
    .add('Ramda', () => {
      Ramda.omit(a, holder)
    })
    .add('Lodash', () => {
      _.omit(holder, a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const path = new Benchmark.Suite

options.path = true

if (options.path){
  const holder = { a : { b : 2 } }
  const a = [ 'a', 'b' ]

  path.add('Rambda.path', () => {
    R.path(a, holder)
  })
    .add('Ramda', () => {
      Ramda.path(a, holder)
    })
    .add('Lodash.get', () => {
      _.get(holder, a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const pick = new Benchmark.Suite

options.pick = true

if (options.pick){
  const holder = {
    a : 'foo',
    b : 'bar',
    c : 'baz',
  }
  const a = [ 'a', 'c' ]

  pick.add('Rambda#pick', () => {
    R.pick(a)(holder)
  })
    .add('Ramda', () => {
      Ramda.pick(a)(holder)
    })
    .add('Lodash', () => {
      _.pick(holder, a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const prop = new Benchmark.Suite

options.prop = true

if (options.prop){
  const holder = {
    a : 'foo',
    b : 'bar',
    c : 'baz',
  }
  const a = 'c'

  prop.add('Rambda#prop', () => {
    R.prop(a)(holder)
  })
    .add('Ramda', () => {
      Ramda.prop(a)(holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const propEq = new Benchmark.Suite

options.propEq = true

if (options.propEq){
  propEq.add('Rambda#propEq', () => {
    R.propEq(
      'foo',
      'bar'
    )({ foo : 'bar' })
  })
    .add('Ramda', () => {
      Ramda.propEq(
        'foo',
        'bar'
      )({ foo : 'bar' })
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const range = new Benchmark.Suite

options.range = true

if (options.range){
  const holder = 10
  const a = 0

  range.add('Rambda#range', () => {
    R.range(a, holder)
  })
    .add('Ramda', () => {
      Ramda.range(a, holder)
    })
    .add('Lodash', () => {
      _.range(a, holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const reduce = new Benchmark.Suite

options.reduce = true

if (options.reduce){
  const fn = (acc, value) => acc + value
  const holder = [ 1, 2, 3 ]
  const acc = ''

  reduce.add('Rambda#reduce', () => {
    R.reduce(fn, acc, holder)
  })
    .add('Ramda', () => {
      Ramda.reduce(fn, acc, holder)
    })
    .add('Lodash', () => {
      _.reduce(holder, fn, acc)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const repeat = new Benchmark.Suite

options.repeat = true

if (options.repeat){
  const holder = 10
  const a = 'foo'

  repeat.add('Rambda#repeat', () => {
    R.repeat(a, holder)
  })
    .add('Ramda', () => {
      Ramda.repeat(a, holder)
    })
    .add('Lodash', () => {
      _.repeat(a, holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const replace = new Benchmark.Suite

options.replace = true

if (options.replace){
  replace.add('Rambda#replace', () => {
    R.replace(/\s/g, '|', 'foo bar baz')
  })
    .add('Ramda', () => {
      Ramda.replace(/\s/g, '|', 'foo bar baz')
    })
    .add('Lodash', () => {
      _.replace('foo bar baz', /\s/g, '|')
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const sort = new Benchmark.Suite

options.sort = true

if (options.sort){
  sort.add('Rambda#sort', () => {
    R.sort((a, b) => a > b)([ 'foo', 'bar', 'baz' ])
  })
    .add('Ramda', () => {
      Ramda.sort((a, b) => a > b)([ 'foo', 'bar', 'baz' ])
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const sortBy = new Benchmark.Suite

options.sortBy = true

if (options.sortBy){
  sortBy.add('Rambda#sortBy', () => {
    R.sortBy(val => val.a, [ { a : 2 }, { a : 1 }, { a : 0 } ])
  })
    .add('Ramda', () => {
      Ramda.sortBy(val => val.a, [ { a : 2 }, { a : 1 }, { a : 0 } ])
    })
    .add('Lodash', () => {
      _.sortBy([ { a : 2 }, { a : 1 }, { a : 0 } ], val => val.a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const split = new Benchmark.Suite

options.split = true

if (options.split){
  split.add('Rambda#split', () => {
    R.split('|', 'foo|bar|baz')
  })
    .add('Ramda', () => {
      Ramda.split('|', 'foo|bar|baz')
    })
    .add('Lodash', () => {
      _.split('foo|bar|baz', '|')
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const splitEvery = new Benchmark.Suite

options.splitEvery = true

if (options.splitEvery){
  splitEvery.add('Rambda#splitEvery', () => {
    R.splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])
  })
    .add('Ramda', () => {
      Ramda.splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const splitEveryString = new Benchmark.Suite

options.splitEveryString = true

if (options.splitEveryString){
  splitEveryString.add('Rambda#splitEvery when String', () => {
    R.splitEvery(3)('foobarbazy')
  })
    .add('Ramda', () => {
      Ramda.splitEvery(3)('foobarbazy')
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const take = new Benchmark.Suite

options.take = true

if (options.take){
  const holder = [ 1, 2, 3, 4 ]
  const a = 2

  take.add('Rambda#take', () => {
    R.take(a, holder)
  })
    .add('Ramda', () => {
      Ramda.take(a, holder)
    })
    .add('Lodash', () => {
      _.take(holder, a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const takeString = new Benchmark.Suite

options.takeString = true

if (options.takeString){
  const holder = 'foobarbaz'
  const a = 7

  takeString.add('Rambda#take when String', () => {
    R.take(a)(holder)
  })
    .add('Ramda', () => {
      Ramda.take(a)(holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const takeLast = new Benchmark.Suite

options.takeLast = true

if (options.takeLast){
  const holder = [ 1, 2, 3, 4 ]
  const a = 2

  takeLast.add('Rambda#takeLast', () => {
    R.takeLast(a, holder)
  })
    .add('Ramda', () => {
      Ramda.takeLast(a, holder)
    })
    .add('Lodash', () => {
      _.takeRight(holder, a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const takeLastString = new Benchmark.Suite

options.takeLastString = true

if (options.takeLastString){
  const holder = 'foobarbaz'
  const a = 5

  takeLastString.add('Rambda#takeLast when String', () => {
    R.takeLast(a, holder)
  })
    .add('Ramda', () => {
      Ramda.takeLast(a, holder)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const test = new Benchmark.Suite

options.test = true

if (options.test){
  test.add('Rambda#test', () => {
    R.test(/\s/g, 'x y z')
  })
    .add('Ramda', () => {
      Ramda.test(/\s/g, 'x y z')
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const toLower = new Benchmark.Suite

options.toLower = true

if (options.toLower){
  const a = 'Foo|Bar|Baz'

  toLower.add('Rambda#toLower', () => {
    R.toLower(a)
  })
    .add('Ramda', () => {
      Ramda.toLower(a)
    })
    .add('Lodash', () => {
      _.lowerCase(a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const toUpper = new Benchmark.Suite

options.toUpper = true

if (options.toUpper){
  const a = 'Foo|Bar|Baz'

  toUpper.add('Rambda#toUpper', () => {
    R.toUpper(a)
  })
    .add('Ramda', () => {
      Ramda.toUpper(a)
    })
    .add('Lodash', () => {
      _.upperCase(a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const trim = new Benchmark.Suite

options.trim = true

if (options.trim){
  const a = ' foo '

  trim.add('Rambda#trim', () => {
    R.trim(a)
  })
    .add('Ramda', () => {
      Ramda.trim(a)
    })
    .add('Lodash', () => {
      _.trim(a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const type = new Benchmark.Suite

options.type = true

if (options.type){
  type.add('Rambda.type', () => {
    R.type([ 1, 2, 3 ])
  })
    .add('Ramda', () => {
      Ramda.type([ 1, 2, 3 ])
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const update = new Benchmark.Suite

options.update = true

if (options.update){
  update.add('Rambda.update', () => {
    R.update(3, 1, [ 1, 2, 3 ])
  })
    .add('Ramda', () => {
      Ramda.update(3, 1, [ 1, 2, 3 ])
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const values = new Benchmark.Suite

options.values = true

if (options.values){
  const a = {
    a : 1,
    b : 2,
  }

  values.add('Rambda#values', () => {
    R.values(a)
  })
    .add('Ramda', () => {
      Ramda.values(a)
    })
    .add('Lodash', () => {
      _.values(a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const uniq = new Benchmark.Suite

options.uniq = true

if (options.uniq){
  const a = [ 4, 1, 3, 5, 4, 2, 3, 4 ]

  uniq.add('Rambda#uniq', () => {
    R.uniq(a)
  })
    .add('Ramda', () => {
      Ramda.uniq(a)
    })
    .add('Lodash', () => {
      _.uniq(a)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}

const example = new Benchmark.Suite

options.example = true

if (options.example){
  const url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'

  example.add('Rambda.compose(join,append,takeLast,map,filter,split)', () => {
    R.compose(
      R.join('|'),
      R.append('foo'),
      R.takeLast(4),
      R.map(R.toLower),
      R.filter(val => val.length > 4),
      R.split('/')
    )(url)
  })
    .add('Ramda', () => {
      Ramda.compose(
        Ramda.join('|'),
        Ramda.append('foo'),
        Ramda.takeLast(4),
        Ramda.map(Ramda.toLower),
        Ramda.filter(val => val.length > 4),
        Ramda.split('/')
      )(url)
    })
    .on('cycle', event => {
      benchmarks.add(event.target)
    })
    .on('complete', () => {
      benchmarks.log()
    })
    .run()
}