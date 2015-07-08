export default function() {
  this.transition(
    this.fromRoute('shome'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
