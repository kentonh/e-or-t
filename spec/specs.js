describe('test answers of Einstein', function() {
    it('Should return Einstein Answers of Odd Indexes as correct', function() {
        einstein(3).should.equal("correct");
    });
    it('Should return Einstein Answers of Even Indexes as incorrect', function() {
        einstein(4).should.equal("incorrect");
    });

});

describe('test answers of Tesla', function() {
    it('Should return Tesla Answers of Even Indexes as correct', function() {
        tesla(6).should.equal("correct");
    });
    it('Should return Tesla Answers of Odd Indexes as incorrect', function() {
        tesla(5).should.equal("incorrect");
    });

});