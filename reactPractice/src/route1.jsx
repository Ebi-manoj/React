import { Counter, CounterProvider } from './counterContext';
import { Card } from './Hoc';
import { Hoc } from './Hoc';
import { Input } from './Practice';

export const Route1 = () => {
  const HocCard = Hoc(Card);
  return (
    <div>
      <h1>This is Home Page</h1>
      <CounterProvider>
        <Counter />
        <HocCard data={'Ebi'} />
        <Input />
      </CounterProvider>
    </div>
  );
};
