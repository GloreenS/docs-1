module.exports = {
    workflow: [
        "workflow/index",
        "workflow/block-explorer",
        "workflow/staking",
        "workflow/ledger-setup",
        "workflow/signer-guide",
        "workflow/token-transfer",
        "workflow/testnet-faucet",
        "workflow/setup",
        "workflow/querying",
        "workflow/account-hash",
        "workflow/two-party-multi-sig",
        {
            type: "category",
            label: "Transferring Tokens",
            collapsible: true,
            collapsed: true,
            items: ["workflow/transfers", "workflow/transfer-workflow", "workflow/deploy-transfer", "workflow/verify-transfer"],
        },
        "workflow/delegate",
        "workflow/undelegate",
        {
            type: "category",
            label: "ERC-20 Sample Guide",
            collapsible: true,
            collapsed: true,
            items: [
                "workflow/erc-20-sample-guide/index",
                "workflow/erc-20-sample-guide/setup",
                "workflow/erc-20-sample-guide/query",
                "workflow/erc-20-sample-guide/transfers",
                "workflow/erc-20-sample-guide/approvals",
                "workflow/erc-20-sample-guide/final-balance",
            ],
        },
        "workflow/erc20-token-deployment-guide",
        "workflow/contribute",
    ],
    "dapp-dev-guide": [
        "dapp-dev-guide/index",
        "dapp-dev-guide/why-build-on-casper",
        "dapp-dev-guide/keys",
        "dapp-dev-guide/understanding-hash-types",
        {
            type: "category",
            label: "Casper SDK Standard",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/sdkspec/introduction",
                "dapp-dev-guide/sdkspec/guidance",
                "dapp-dev-guide/sdkspec/json-rpc-minimal",
                "dapp-dev-guide/sdkspec/json-rpc-transactional",
                "dapp-dev-guide/sdkspec/json-rpc-informational",
                "dapp-dev-guide/sdkspec/json-rpc-pos",
                "dapp-dev-guide/sdkspec/types_chain",
                "dapp-dev-guide/sdkspec/types_cl",
            ],
        },
        "dapp-dev-guide/list-cspr",
        {
            type: "category",
            label: "Building dApps",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/sending-deploys",
                {
                    type: "category",
                    label: "SDK Client Libraries",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/sdk/index",
                        "dapp-dev-guide/sdk/script-sdk",
                        "dapp-dev-guide/sdk/csharp-sdk",
                        "dapp-dev-guide/sdk/go-sdk",
                        "dapp-dev-guide/sdk/python-sdk",
                    ],
                },
                "dapp-dev-guide/setup-nctl",
                "dapp-dev-guide/monitoring-events",
                "dapp-dev-guide/casper-signer",
            ],
        },
        {
            type: "category",
            label: "Writing Smart Contracts",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/writing-contracts/index",
                "dapp-dev-guide/getting-started",
                "dapp-dev-guide/session-code",
                "dapp-dev-guide/writing-contracts/rust",
                "dapp-dev-guide/writing-contracts/assembly-script",
                "dapp-dev-guide/testing",
                "dapp-dev-guide/upgrading-contracts",
                "dapp-dev-guide/calling-contracts",
                "dapp-dev-guide/execution-error-codes",
            ],
        },
        {
            type: "category",
            label: "Tutorials",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/tutorials/index",
                {
                    type: "category",
                    label: "A Counter Contract Tutorial",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/counter/index",
                        "dapp-dev-guide/tutorials/counter/overview",
                        "dapp-dev-guide/tutorials/counter/commands",
                        "dapp-dev-guide/tutorials/counter/setup",
                        "dapp-dev-guide/tutorials/counter/walkthrough",
                    ],
                },
                "dapp-dev-guide/tutorials/kv-storage-tutorial",
                {
                    type: "category",
                    label: "Multi-Signature Tutorial",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/multi-sig/index",
                        "dapp-dev-guide/tutorials/multi-sig/concepts",
                        "dapp-dev-guide/tutorials/multi-sig/contract",
                        "dapp-dev-guide/tutorials/multi-sig/client",
                        "dapp-dev-guide/tutorials/multi-sig/example",
                        "dapp-dev-guide/tutorials/multi-sig/additional",
                    ],
                },
                "dapp-dev-guide/tutorials/return-values-tutorial",
                "dapp-dev-guide/tutorials/upgrade-contract",
                "dapp-dev-guide/tutorials/transfer-token-to-contract",
            ],
        },
    ],
    operators: [
        "operators/index",
        "operators/hardware",
        "operators/setup",
        "operators/create",
        "operators/joining",
        "operators/upgrade",
        "operators/bonding",
        "operators/unbonding",
    ],
    design: [
        "design/index",
        "design/p2p",
        "design/global-state",
        "design/execution-semantics",
        "design/accounts",
        "design/block-structure",
        "design/uref",
        "design/serialization-standard",
        "design/tokens",
        "design/checksummed-hex",
        "design/appendix",
    ],
    economics: [
        "economics/index",
        "economics/consensus",
        {
            type: "category",
            label: "Runtime Economics",
            collapsible: true,
            collapsed: true,
            items: ["economics/runtime", "economics/gas-concepts"],
        },
        "economics/delegation",
        "economics/concepts",
    ],
    faq: ["faq/index", "faq/faq-general", "faq/faq-enterpise", "faq/faq-developer", "faq/faq-validator"],
    glossary: [
        "glossary/index",
        "glossary/A",
        "glossary/B",
        "glossary/C",
        "glossary/D",
        "glossary/E",
        "glossary/F",
        "glossary/G",
        "glossary/H",
        "glossary/I",
        "glossary/J",
        "glossary/K",
        "glossary/L",
        "glossary/M",
        "glossary/N",
        "glossary/O",
        "glossary/P",
        "glossary/Q",
        "glossary/R",
        "glossary/S",
        "glossary/T",
        "glossary/U",
        "glossary/V",
        "glossary/W",
        "glossary/X",
        "glossary/Y",
        "glossary/Z",
    ],
    staking: ["staking/index", "workflow/staking", "workflow/delegate"],
};
