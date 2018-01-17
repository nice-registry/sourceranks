# sourceranks

[SourceRank](https://docs.libraries.io/overview#sourcerank)
is a methodology for assigning numerical scores to software libraries.

It was developed by the folks at [libraries.io](http://libraries.io),
an ambitious project that aims to track all the package managers.

For the full story on SourceRank, see 
[docs.libraries.io/overview#sourcerank](https://docs.libraries.io/overview#sourcerank)

## Installation

This is a multi-package repository, also known as a 
[monorepo](https://macwright.org/2016/07/08/lerna-npm-organizations-new-wave-modularity.html)

It houses two npm packages:

- [`sourceranks-data`](packages/sourceranks-data) is a module that exports 
a LevelDB database that contains detailed SourceRank data for each package in 
the npm registry. It's on the big side, around 200MB.
- [`sourceranks`](packages/sourceranks) is a smaller module (about 15MB)
that contains just the SourceRank totals for each package. This is probably
what you want.

## License

MIT
