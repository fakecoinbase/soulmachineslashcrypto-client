import { queryAllBalances } from '../../src/exchanges/binance';
import { init } from '../../src/index';
import readUserConfig from '../user_config';

beforeAll(async () => {
  const userConfig = readUserConfig();
  await init(userConfig);
});

test('queryAllBalances(Binance)', async () => {
  const balances = await queryAllBalances();
  const symbols = ['BTC', 'ETH', 'EOS', 'USDT'];

  symbols.forEach((symbol) => {
    expect(balances).toHaveProperty(symbol);
  });
});
