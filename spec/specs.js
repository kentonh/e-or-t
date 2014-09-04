describe('test answers of Einstein', function() {
    it('Should return Einstein Answers of Odd Indexes as correct', function() {
        var quote = { name:"E", text:"Imagination is more important than knowledge."};

        einstein(quote).should.equal('<div class="correct">Correct! <a href="">Want another?</a></div>');
    });
    it('Should return Einstein Answers of Even Indexes as incorrect', function() {
        tesla(quote).should.equal('<div class="incorrect">Incorrect! <a href="">Want another?</a></div>');
    });

});

describe('test answers of Tesla', function() {
    var quote2 = { name:"T", text:"I don't care that they stole my idea . . I care that they don't have any of their own"};
    it('Should return Tesla Answers of Even Indexes as correct', function() {
        tesla(quote2).should.equal('<div class="correct">Correct! <a href="">Want another?</a></div>');
    });
    it('Should return Tesla Answers of Odd Indexes as incorrect', function() {
        einstein(quote2).should.equal('<div class="incorrect">Incorrect! <a href="">Want another?</a></div>');
    });

});