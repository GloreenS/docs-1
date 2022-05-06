"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6878],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return _}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),_=a,h=d["".concat(u,".").concat(_)]||d[_]||p[_]||o;return t?r.createElement(h,c(c({ref:n},s),{},{components:t})):r.createElement(h,c({ref:n},s))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},367:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return _},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),c=["components"],i={},u="Advanced Options",l={unversionedId:"dapp-dev-guide/contract-dsl/archived/advanced",id:"dapp-dev-guide/contract-dsl/archived/advanced",title:"Advanced Options",description:"Once the base logic of the smart contract is in place, it's desirable to optimize the contract for the blockchain. This will require digging into the actual code that the DSL generates. This section will describe the steps to do this. Once the code has been expanded and then changed, make sure to remove the macros from the project configuration before saving the changes.",source:"@site/source/docs/casper/dapp-dev-guide/contract-dsl/archived/advanced.md",sourceDirName:"dapp-dev-guide/contract-dsl/archived",slug:"/dapp-dev-guide/contract-dsl/archived/advanced",permalink:"/dapp-dev-guide/contract-dsl/archived/advanced",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/contract-dsl/archived/advanced.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Debugging Contracts",id:"debugging-contracts",level:2},{value:"Expanding the Code",id:"expanding-the-code",level:3},{value:"Example Simple Counter Contract",id:"example-simple-counter-contract",level:3}],d={toc:p};function _(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("p",null,"Once the base logic of the smart contract is in place, it's desirable to optimize the contract for the blockchain. This will require digging into the actual code that the DSL generates. This section will describe the steps to do this. Once the code has been expanded and then changed, make sure to remove the macros from the project configuration before saving the changes."),(0,o.kt)("h2",{id:"debugging-contracts"},"Debugging Contracts"),(0,o.kt)("p",null,"It is possible to debug Rust contracts inside any IDE that supports breakpoints and watches. Make sure that the IDE supports Rust development and tools."),(0,o.kt)("h3",{id:"expanding-the-code"},"Expanding the Code"),(0,o.kt)("p",null,"When the rust compiler encounters each of the macros, it 'expands' the code and adds additional lines of code for each of the macros. The resultant expanded code is then compiled to the wasm which can then be deployed to the blockchain."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo expand")," tool will run the macros and append the boilerplate code to the contract without compiling the code."),(0,o.kt)("p",null,"Install the tooling with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo install cargo-expand\n")),(0,o.kt)("p",null,"Run this command in the folder containing the smart contract code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo expand\n")),(0,o.kt)("h3",{id:"example-simple-counter-contract"},"Example Simple Counter Contract"),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-expand")," on the simple counter contract yeilds this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![feature(prelude_import)]\n#[prelude_import]\nuse std::prelude::v1::*;\n#[macro_use]\nextern crate std;\nextern crate alloc;\nuse alloc::{collections::BTreeSet, string::String};\nuse contract::{\n    contract_api::{runtime, storage},\n    unwrap_or_revert::UnwrapOrRevert,\n};\nuse casperlabs_contract_macro::{casperlabs_constructor, casperlabs_contract, casperlabs_method};\nuse std::convert::TryInto;\nuse types::{\n    CLValue,\n    bytesrepr::{FromBytes, ToBytes},\n    contracts::{EntryPoint, EntryPointAccess, EntryPointType, EntryPoints},\n    runtime_args, CLType, CLTyped, Group, Key, Parameter, RuntimeArgs, URef,\n};\nconst KEY: &str = "special_value";\nfn __deploy(initial_value: u64) {\n    let (contract_package_hash, _) = storage::create_contract_package_at_hash();\n    let _constructor_access_uref: URef = storage::create_contract_user_group(\n        contract_package_hash,\n        "constructor",\n        1,\n        BTreeSet::new(),\n    )\n    .unwrap_or_revert()\n    .pop()\n    .unwrap_or_revert();\n    let constructor_group = Group::new("constructor");\n    let mut entry_points = EntryPoints::new();\n    entry_points.add_entry_point(EntryPoint::new(\n        String::from("init_counter"),\n        <[_]>::into_vec(box [Parameter::new("initial_value", CLType::U64)]),\n        CLType::Unit,\n        EntryPointAccess::Groups(<[_]>::into_vec(box [constructor_group])),\n        EntryPointType::Contract,\n    ));\n    entry_points.add_entry_point(EntryPoint::new(\n        String::from("update_counter"),\n        ::alloc::vec::Vec::new(),\n        CLType::Unit,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    ));\n    entry_points.add_entry_point(EntryPoint::new(\n        String::from("get_counter_value"),\n        ::alloc::vec::Vec::new(),\n        CLType::Unit,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    ));\n    let (contract_hash, _) =\n        storage::add_contract_version(contract_package_hash, entry_points, Default::default());\n    runtime::put_key("tutorial", contract_hash.into());\n    let contract_hash_pack = storage::new_uref(contract_hash);\n    runtime::put_key("tutorial_hash", contract_hash_pack.into());\n    runtime::call_contract::<()>(contract_hash, "init_counter", {\n        let mut named_args = RuntimeArgs::new();\n        named_args.insert("initial_value", initial_value);\n        named_args\n    });\n}\n#[no_mangle]\nfn call() {\n    let initial_value: u64 = runtime::get_named_arg("initial_value");\n    __deploy(initial_value)\n}\nfn __init_counter(initial_value: u64) {\n    let value_ref: URef = storage::new_uref(initial_value);\n    let value_key: Key = value_ref.into();\n    runtime::put_key(KEY, value_key);\n}\n#[no_mangle]\nfn init_counter() {\n    let initial_value: u64 = runtime::get_named_arg("initial_value");\n    __init_counter(initial_value)\n}\nfn __update_counter() {\n    let old_value: u64 = key(KEY).unwrap();\n    let new_value = old_value + 1;\n    set_key(KEY, new_value);\n}\n#[no_mangle]\nfn update_counter() {\n    __update_counter();\n}\nfn __get_counter_value() -> u64 {\n    key(KEY).unwrap()\n}\n#[no_mangle]\nfn get_counter_value() {\n    let val: u64 = __get_counter_value();\n    ret(val)\n}\nfn key<T: FromBytes + CLTyped>(name: &str) -> Option<T> {\n    match runtime::get_key(name) {\n        None => None,\n        Some(maybe_key) => {\n            let key = maybe_key.try_into().unwrap_or_revert();\n            let value = storage::read(key).unwrap_or_revert().unwrap_or_revert();\n            Some(value)\n        }\n    }\n}\nfn set_key<T: ToBytes + CLTyped>(name: &str, value: T) {\n    match runtime::get_key(name) {\n        Some(key) => {\n            let key_ref = key.try_into().unwrap_or_revert();\n            storage::write(key_ref, value);\n        }\n        None => {\n            let key = storage::new_uref(value).into();\n            runtime::put_key(name, key);\n        }\n    }\n}\nfn ret<T: CLTyped + ToBytes>(value: T) {\n    runtime::ret(CLValue::from_t(value).unwrap_or_revert())\n}\n')))}_.isMDXComponent=!0}}]);