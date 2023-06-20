class BlockchainConfig {
    constructor() {
        if (!this.instance) {
            this.instance = this;
        }
        return this.instance;
    }
    
    tokenAddress = null;
}

module.exports = BlockchainConfig;  