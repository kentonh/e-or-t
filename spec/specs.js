describe('test answers of Einstein', function() {
    it('Should return Einstein Answers of Odd Indexes as correct', function() {
        einstein(3).should.equal('<div class="correct">Correct! <a href="">Want another?</a></div>');
    });
    it('Should return Einstein Answers of Even Indexes as incorrect', function() {
        einstein(4).should.equal('<div class="incorrect">Incorrect! <a href="">Want another?</a></div>');
    });

});

describe('test answers of Tesla', function() {
    it('Should return Tesla Answers of Even Indexes as correct', function() {
        tesla(6).should.equal('<div class="correct">Correct! <a href="">Want another?</a></div>');
    });
    it('Should return Tesla Answers of Odd Indexes as incorrect', function() {
        tesla(5).should.equal('<div class="incorrect">Incorrect! <a href="">Want another?</a></div>');
    });

});