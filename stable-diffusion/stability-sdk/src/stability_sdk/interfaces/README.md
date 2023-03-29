## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

<<<<<<< HEAD
Api-Interfaces is the gRPC protocol for communication between the
[api-bridge](https://github.com/Stability-AI/api-bridge), the [api-web](https://github.com/Stability-AI/api-web),
and the [generator_server](https://github.com/Stability-AI/generator_server). Additionally, any
other client application communicating directly with `api-web` also use the interfaces generated
=======
Api-Interfaces is the gRPC protocol for communication between the 
[api-bridge](https://github.com/Stability-AI/api-bridge), the [api-web](https://github.com/Stability-AI/api-web),
and the [generator_server](https://github.com/Stability-AI/generator_server). Additionally, any 
other client application communicating directly with `api-web` also use the interfaces generated 
>>>>>>> 917d866 (test)
from this repository.

## Getting Started <a name = "getting_started"></a>

These instructions will get you an environment setup to build the interface files from the proto source files.

### Prerequisites

The following items are needed to develop api-interfaces:
<<<<<<< HEAD

=======
>>>>>>> 917d866 (test)
- [golang](https://go.dev/) >= 1.18
- [nodejs](https://nodejs.org/en/) >= 16.16.0
- [cmake](https://cmake.org/) >= 3.14
- [protoc](https://github.com/protocolbuffers/protobuf#protocol-compiler-installation)
- [grpc](https://grpc.io/)

<<<<<<< HEAD
It is recommended to use ssh cloning with this project for `git` and for `go get`, although `https`
does appear to work. To force ssh (for github) put the following in your `.gitconfig`:
=======
It is recommended to use ssh cloning with this project for `git` and for `go get`, although `https` 
does appear to work.  To force ssh (for github) put the following in your `.gitconfig`:
>>>>>>> 917d866 (test)

```ini
[url "ssh://git@github.com/"]
  insteadOf = https://github.com/
```

### Setup and building

After all the prerequisites are installed and available, this project can be setup by the following:

```shell
git clone --recurse-submodules git@github.com:Stability-AI/api-interfaces.git
cd api-interfaces
cmake .
cmake --build .
```

<<<<<<< HEAD
This will produce files for the various languages in [gooseai](./gooseai) to support the proto
files in [src](./src). _When rebuilding the files it is recommended to do a clean before as there
have been instances of not all files being regenerated without it._

## 🎈 Usage <a name="usage"></a>

The generated files are all output in [gooseai](./gooseai). How to use these files depends on the
programming language being used. The following sections provide details for each of the supported
languages.

The files have different usages and not all are required depending on the situation:
| Suffix | Client | Server |
|-------------|--------|--------|
| \_grpc_pb | ✔️1 | ✔️ |
| \_pb_service | ✔️2 | |
| \_pb | ✔️ | ✔️ |
=======
This will produce files for the various languages in [gooseai](./gooseai) to support the proto 
files in [src](./src).  *When rebuilding the files it is recommended to do a clean before as there 
have been instances of not all files being regenerated without it.*

## 🎈 Usage <a name="usage"></a>

The generated files are all output in [gooseai](./gooseai).  How to use these files depends on the 
programming language being used.  The following sections provide details for each of the supported 
languages.

The files have different usages and not all are required depending on the situation:
| Suffix      | Client | Server |
|-------------|--------|--------|
| _grpc_pb    | ✔️1    | ✔️     |
| _pb_service | ✔️2    |        |
| _pb         | ✔️     | ✔️     |

>>>>>>> 917d866 (test)

1. Not needed for typescript/javascript clients.
2. Only needed for typscript/javascripts clients.

<<<<<<< HEAD
### Golang

For Golang the interfaces can be added to the project as a normal module require. To add them run:
=======

### Golang

For Golang the interfaces can be added to the project as a normal module require.  To add them run:
>>>>>>> 917d866 (test)

```shell
go get github.com/Stability-AI/api-interfaces@latest
```

<<<<<<< HEAD
Similarly to update them just run the same command with the short sha of the version to update to.
=======
Similarly to update them just run the same command with the short sha of the version to update to. 
>>>>>>> 917d866 (test)
Use them as you would a normal module.

### Python

<<<<<<< HEAD
With the current output, the best way to consume these is to add them as a git submodule to your
project. It is recommended to use ssh clone when adding the submodule. To update them just
=======
With the current output, the best way to consume these is to add them as a git submodule to your 
project.  It is recommended to use ssh clone when adding the submodule.  To update them just
>>>>>>> 917d866 (test)
checkout the newer version from within the submodule (and remember to commit the submodule change
to your project).

To use them make sure the files are on the python path.

<<<<<<< HEAD
### Typescript / Javascript

With the current output, the best way to consume these is to add them as a git submodule to your
project. It is recommended to use ssh clone when adding the submodule. To update them just
=======

### Typescript / Javascript

With the current output, the best way to consume these is to add them as a git submodule to your 
project.  It is recommended to use ssh clone when adding the submodule.  To update them just
>>>>>>> 917d866 (test)
checkout the newer version from within the submodule (and remember to commit the submodule change
to your project).

To use them make sure they are in a location that can be found by your typescript/javascript files.

<<<<<<< HEAD
_NOTE: Typescript requires both the typescript and javascript files to be available._

### Other Languages / Custom Build

If not using the CMake defined builds to generate make sure when building from the source proto
files that the following proto include paths are set:

=======
*NOTE: Typescript requires both the typescript and javascript files to be available.*

### Other Languages / Custom Build

If not using the CMake defined builds to generate make sure when building from the source proto 
files that the following proto include paths are set:
>>>>>>> 917d866 (test)
- `src/proto`
- `src/tensorizer/proto`
