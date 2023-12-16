import { ConvertToFarenheitPipe } from './convert-to-farenheit.pipe';

describe('ConvertToFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
